/**
 * Core type definitions for the LSAI — AI-Powered Bahá'í Local Spiritual Assembly.
 */

/** Officer and member roles within the assembly */
export type AssemblyRole =
  | 'chairperson'
  | 'vice-chairperson'
  | 'secretary'
  | 'treasurer'
  | 'member';

/** Supported AI providers */
export type AIProvider = 'openai' | 'anthropic' | 'google';

/** A member of the nine-person Local Spiritual Assembly */
export type AssemblyMember = {
  /** Unique identifier for this member */
  id: string;
  /** Display name (Bahá'í-inspired) */
  name: string;
  /** Role within the assembly */
  role: AssemblyRole;
  /** AI provider for this member's model */
  provider: AIProvider;
  /** Specific model ID (e.g., 'gpt-4o', 'claude-sonnet-4-20250514') */
  modelId: string;
  /** Brief personality description guiding agent behavior */
  personality: string;
  /** Whether this member uses a deliberately weaker model */
  isWeakModel: boolean;
};

/** A topic brought before the assembly for consultation */
export type ConsultationTopic = {
  /** Unique identifier */
  id: string;
  /** Short title of the topic */
  title: string;
  /** Detailed description of the matter */
  description: string;
  /** Known facts relevant to the topic */
  facts: string[];
  /** Relevant Bahá'í guidance (populated by the system) */
  relevantGuidance: string[];
};

/** Types of messages in a consultation */
export type ConsultationMessageType =
  | 'prayer'
  | 'fact'
  | 'opinion'
  | 'response'
  | 'summary'
  | 'vote'
  | 'procedural';

/** A single message in the consultation stream */
export type ConsultationMessage = {
  /** Which member sent this message */
  memberId: string;
  /** Display name of the member */
  memberName: string;
  /** Role of the member */
  memberRole: AssemblyRole;
  /** The message content */
  content: string;
  /** Current phase when this message was generated */
  phase: ConsultationPhase;
  /** Discussion round number (0 for non-discussion phases) */
  round: number;
  /** Type of contribution */
  type: ConsultationMessageType;
};

/** Phases of the Bahá'í consultation process */
export type ConsultationPhase =
  | 'opening-prayer'
  | 'fact-gathering'
  | 'discussion'
  | 'decision'
  | 'closing-prayer';

/** A vote cast by a member during the decision phase */
export type MemberVote = {
  memberId: string;
  memberName: string;
  inFavor: boolean;
  reasoning: string;
};

/** Complete record of a consultation meeting */
export type MeetingRecord = {
  /** Unique identifier */
  id: string;
  /** The topic consulted on */
  topic: ConsultationTopic;
  /** All messages from the consultation */
  messages: ConsultationMessage[];
  /** Final phase reached */
  phase: ConsultationPhase;
  /** The decision reached, if any */
  decision: string | null;
  /** Individual votes */
  votes: MemberVote[];
  /** Whether the decision was unanimous */
  unanimous: boolean;
  /** When the meeting occurred */
  createdAt: Date;
};

/** Configuration for the consultation orchestrator */
export type ConsultationConfig = {
  /** Maximum number of discussion rounds (default: 3) */
  maxDiscussionRounds: number;
  /** Maximum output tokens per individual agent response */
  maxOutputTokensPerResponse: number;
};

/** Serialized consultation message for SSE streaming */
export type StreamedConsultationEvent = {
  type: 'message' | 'phase-change' | 'decision' | 'error' | 'complete';
  data: ConsultationMessage | { phase: ConsultationPhase } | { decision: string; unanimous: boolean } | { error: string } | { meetingId: string };
};
