/**
 * The nine members of the LSAI — the AI-powered Local Spiritual Assembly.
 * Each member has a unique personality, role, and AI model backing them.
 */

import type { AssemblyMember } from './types';
import { CHAIRPERSON_PROMPT } from './prompts/chairperson';
import { SECRETARY_PROMPT } from './prompts/secretary';
import { TREASURER_PROMPT } from './prompts/treasurer';
import { AWKWARD_MEMBER_PROMPT } from './prompts/awkward-member';
import { buildMemberPrompt } from './prompts/member';

/** System prompt for each member, resolved by their ID */
export function getSystemPrompt(member: AssemblyMember): string {
  switch (member.id) {
    case 'ruhiyyih':
      return CHAIRPERSON_PROMPT;
    case 'tahirih':
      return SECRETARY_PROMPT;
    case 'mulla':
      return TREASURER_PROMPT;
    case 'munirih':
      return AWKWARD_MEMBER_PROMPT;
    default:
      return buildMemberPrompt(member.personality, member.name);
  }
}

/** The nine members of the Local Spiritual Assembly */
export const ASSEMBLY_MEMBERS: ReadonlyArray<AssemblyMember> = [
  {
    id: 'ruhiyyih',
    name: 'Rúhíyyih',
    role: 'chairperson',
    provider: 'anthropic',
    modelId: 'claude-opus-4-6',
    personality:
      'Thoughtful and measured. Seeks consensus patiently. Has a gift for synthesizing different viewpoints into coherent summaries. Speaks with quiet authority earned through years of service.',
    isWeakModel: false,
  },
  {
    id: 'husayn',
    name: 'Husayn',
    role: 'vice-chairperson',
    provider: 'openai',
    modelId: 'gpt-5.2',
    personality:
      'Reliable and balanced. Supports the Chairperson while offering his own measured insights. Known for asking the right questions at the right time. A steadying presence in the assembly.',
    isWeakModel: false,
  },
  {
    id: 'tahirih',
    name: 'Táhirih',
    role: 'secretary',
    provider: 'anthropic',
    modelId: 'claude-sonnet-4-6',
    personality:
      'Organized, precise, and detail-oriented. Takes meticulous notes and ensures nothing falls through the cracks. Asks clarifying questions to make sure the record is accurate.',
    isWeakModel: false,
  },
  {
    id: 'mulla',
    name: 'Mullá',
    role: 'treasurer',
    provider: 'google',
    modelId: 'gemini-3-flash-preview',
    personality:
      'Analytical and practical. Thinks about resource implications and feasibility. Grounds lofty discussions in material reality while maintaining spiritual perspective.',
    isWeakModel: false,
  },
  {
    id: 'bahiyyih',
    name: 'Bahíyyih',
    role: 'member',
    provider: 'openai',
    modelId: 'gpt-4.1-mini',
    personality:
      'Warm, empathetic, and community-focused. Always thinks about how decisions affect individual believers, especially new members, youth, and families. The heart of the assembly.',
    isWeakModel: false,
  },
  {
    id: 'nabil',
    name: 'Nabíl',
    role: 'member',
    provider: 'anthropic',
    modelId: 'claude-sonnet-4-6',
    personality:
      'Philosophical and well-read. Often references the Bahá\'í Writings and draws connections to broader spiritual principles. Brings depth and historical perspective to consultations.',
    isWeakModel: false,
  },
  {
    id: 'shoghi',
    name: 'Shoghi',
    role: 'member',
    provider: 'google',
    modelId: 'gemini-2.5-pro',
    personality:
      'Broad institutional perspective. Thinks about how local decisions connect to national and international Bahá\'í plans. Knowledgeable about the Administrative Order and its processes.',
    isWeakModel: false,
  },
  {
    id: 'munirih',
    name: 'Munírih',
    role: 'member',
    provider: 'openai',
    modelId: 'gpt-4.1-mini',
    personality:
      'Earnest and enthusiastic but sometimes off-base. Deeply sincere in her love for the Faith. Occasionally misunderstands the topic or goes on tangents. The assembly handles her contributions with loving patience.',
    isWeakModel: true,
  },
  {
    id: 'zaynab',
    name: 'Zaynab',
    role: 'member',
    provider: 'openai',
    modelId: 'gpt-5.2',
    personality:
      'Practical and action-oriented. Always asks "So what do we actually do about this?" Focused on implementation, timelines, and accountability. Keeps the assembly grounded in action.',
    isWeakModel: false,
  },
] as const;

/** Get a specific member by ID */
export function getMemberById(id: string): AssemblyMember | undefined {
  return ASSEMBLY_MEMBERS.find((m) => m.id === id);
}

/** Get all members with a specific role */
export function getMembersByRole(role: AssemblyMember['role']): AssemblyMember[] {
  return ASSEMBLY_MEMBERS.filter((m) => m.role === role);
}

/** Get the chairperson */
export function getChairperson(): AssemblyMember {
  const chair = ASSEMBLY_MEMBERS.find((m) => m.role === 'chairperson');
  if (!chair) {
    throw new Error('No chairperson found in assembly members');
  }
  return chair;
}

/** Get the secretary */
export function getSecretary(): AssemblyMember {
  const secretary = ASSEMBLY_MEMBERS.find((m) => m.role === 'secretary');
  if (!secretary) {
    throw new Error('No secretary found in assembly members');
  }
  return secretary;
}

/** Get the treasurer */
export function getTreasurer(): AssemblyMember {
  const treasurer = ASSEMBLY_MEMBERS.find((m) => m.role === 'treasurer');
  if (!treasurer) {
    throw new Error('No treasurer found in assembly members');
  }
  return treasurer;
}
