/**
 * Model resolution utility.
 * Maps provider + modelId to the correct Vercel AI SDK model instance.
 */

import type { LanguageModel } from 'ai';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import type { AIProvider } from './types';

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
