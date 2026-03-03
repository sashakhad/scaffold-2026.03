import { getModelInstance, directModelCall } from '../models';

// Mock the AI SDK providers
jest.mock('@ai-sdk/openai', () => ({
  openai: jest.fn((modelId: string) => ({ provider: 'openai', modelId })),
}));

jest.mock('@ai-sdk/anthropic', () => ({
  anthropic: jest.fn((modelId: string) => ({ provider: 'anthropic', modelId })),
}));

jest.mock('@ai-sdk/google', () => ({
  google: jest.fn((modelId: string) => ({ provider: 'google', modelId })),
}));

describe('getModelInstance', () => {
  it('returns an OpenAI model instance', () => {
    const model = getModelInstance('openai', 'gpt-5.2');
    expect(model).toEqual({ provider: 'openai', modelId: 'gpt-5.2' });
  });

  it('returns an Anthropic model instance', () => {
    const model = getModelInstance('anthropic', 'claude-opus-4-6');
    expect(model).toEqual({ provider: 'anthropic', modelId: 'claude-opus-4-6' });
  });

  it('returns a Google model instance', () => {
    const model = getModelInstance('google', 'gemini-3-flash-preview');
    expect(model).toEqual({ provider: 'google', modelId: 'gemini-3-flash-preview' });
  });

  it('throws for unknown provider', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => getModelInstance('unknown' as any, 'model-id')).toThrow(
      'Unknown AI provider: unknown',
    );
  });
});

describe('directModelCall', () => {
  it('throws for unknown provider', async () => {
    await expect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      directModelCall({ provider: 'unknown' as any, modelId: 'x', system: '', prompt: '', maxOutputTokens: 100 }),
    ).rejects.toThrow('Unknown provider for direct call: unknown');
  });

  it('throws when OpenAI API key is missing', async () => {
    const original = process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_API_KEY;
    await expect(
      directModelCall({ provider: 'openai', modelId: 'gpt-5.2', system: '', prompt: '', maxOutputTokens: 100 }),
    ).rejects.toThrow('OPENAI_API_KEY is not set');
    process.env.OPENAI_API_KEY = original;
  });

  it('throws when Anthropic API key is missing', async () => {
    const original = process.env.ANTHROPIC_API_KEY;
    delete process.env.ANTHROPIC_API_KEY;
    await expect(
      directModelCall({ provider: 'anthropic', modelId: 'claude-opus-4-6', system: '', prompt: '', maxOutputTokens: 100 }),
    ).rejects.toThrow('ANTHROPIC_API_KEY is not set');
    process.env.ANTHROPIC_API_KEY = original;
  });

  it('throws when Google API key is missing', async () => {
    const original = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    delete process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    await expect(
      directModelCall({ provider: 'google', modelId: 'gemini-3-flash-preview', system: '', prompt: '', maxOutputTokens: 100 }),
    ).rejects.toThrow('GOOGLE_GENERATIVE_AI_API_KEY is not set');
    process.env.GOOGLE_GENERATIVE_AI_API_KEY = original;
  });
});
