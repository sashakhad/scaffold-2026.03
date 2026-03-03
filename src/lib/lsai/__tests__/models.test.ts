import { getModelInstance } from '../models';

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
    const model = getModelInstance('openai', 'gpt-4o');
    expect(model).toEqual({ provider: 'openai', modelId: 'gpt-4o' });
  });

  it('returns an Anthropic model instance', () => {
    const model = getModelInstance('anthropic', 'claude-sonnet-4-20250514');
    expect(model).toEqual({ provider: 'anthropic', modelId: 'claude-sonnet-4-20250514' });
  });

  it('returns a Google model instance', () => {
    const model = getModelInstance('google', 'gemini-2.0-flash');
    expect(model).toEqual({ provider: 'google', modelId: 'gemini-2.0-flash' });
  });

  it('throws for unknown provider', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => getModelInstance('unknown' as any, 'model-id')).toThrow(
      'Unknown AI provider: unknown',
    );
  });
});
