/**
 * Model resolution utility with fallback support.
 *
 * Primary: Vercel AI SDK (@ai-sdk/openai, @ai-sdk/anthropic, @ai-sdk/google)
 * Fallback: Direct HTTP calls to each provider's API
 *
 * The fallback activates automatically if the Vercel AI SDK call fails,
 * ensuring the consultation can proceed even if there's an SDK compatibility
 * issue with a particular model or provider.
 */

import type { LanguageModel } from 'ai';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import type { AIProvider } from './types';

// ── Primary: Vercel AI SDK ──────────────────────────────────────

const providerMap: Record<AIProvider, (modelId: string) => LanguageModel> = {
  openai: (modelId: string) => openai(modelId),
  anthropic: (modelId: string) => anthropic(modelId),
  google: (modelId: string) => google(modelId),
};

/**
 * Get a Vercel AI SDK model instance for a given provider and model ID.
 * @throws if the provider is not recognized
 */
export function getModelInstance(provider: AIProvider, modelId: string): LanguageModel {
  const factory = providerMap[provider];
  if (!factory) {
    throw new Error(`Unknown AI provider: ${provider}. Expected one of: openai, anthropic, google`);
  }
  return factory(modelId);
}

// ── Fallback: Direct API Calls ──────────────────────────────────

type DirectCallParams = {
  provider: AIProvider;
  modelId: string;
  system: string;
  prompt: string;
  maxOutputTokens: number;
};

/**
 * Call a model directly via its provider's HTTP API, bypassing the Vercel AI SDK.
 * Used as a fallback when the SDK fails (e.g., version incompatibilities,
 * unsupported model IDs, or SDK bugs).
 */
export async function directModelCall(params: DirectCallParams): Promise<string> {
  switch (params.provider) {
    case 'openai':
      return callOpenAIDirect(params);
    case 'anthropic':
      return callAnthropicDirect(params);
    case 'google':
      return callGoogleDirect(params);
    default:
      throw new Error(`Unknown provider for direct call: ${params.provider}`);
  }
}

async function callOpenAIDirect(params: DirectCallParams): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: params.modelId,
      messages: [
        { role: 'system', content: params.system },
        { role: 'user', content: params.prompt },
      ],
      max_completion_tokens: params.maxOutputTokens,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI direct call failed (${response.status}): ${body}`);
  }

  const data = (await response.json()) as {
    choices: Array<{ message: { content: string } }>;
  };

  return data.choices[0]?.message.content ?? '';
}

async function callAnthropicDirect(params: DirectCallParams): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not set');
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: params.modelId,
      max_tokens: params.maxOutputTokens,
      system: params.system,
      messages: [{ role: 'user', content: params.prompt }],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Anthropic direct call failed (${response.status}): ${body}`);
  }

  const data = (await response.json()) as {
    content: Array<{ type: string; text: string }>;
  };

  const textBlocks = data.content.filter((b) => b.type === 'text');
  return textBlocks.map((b) => b.text).join('');
}

async function callGoogleDirect(params: DirectCallParams): Promise<string> {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_GENERATIVE_AI_API_KEY is not set');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${params.modelId}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: params.system }] },
      contents: [{ parts: [{ text: params.prompt }] }],
      generationConfig: {
        maxOutputTokens: params.maxOutputTokens,
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Google direct call failed (${response.status}): ${body}`);
  }

  const data = (await response.json()) as {
    candidates: Array<{
      content: { parts: Array<{ text: string }> };
    }>;
  };

  return data.candidates[0]?.content.parts.map((p) => p.text).join('') ?? '';
}
