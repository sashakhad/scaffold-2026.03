# LSAI — Local Spiritual Assembly Intelligence

Nine AI agents consult on community matters using authentic Bahá'í consultation principles — with prayer, frank discussion, and unity.

---

## What is LSAI?

LSAI is an AI-powered simulation of a Bahá'í [Local Spiritual Assembly](https://www.bahai.org/beliefs/essential-relationships/administrative-order/local-spiritual-assembly) (LSA). Nine AI agents, each backed by a **different LLM**, role-play as the nine members of an assembly. They follow the Bahá'í consultation process:

1. **Opening Prayer** — The assembly opens with a prayer from the Bahá'í Writings
2. **Fact Gathering** — Members share relevant information about the topic
3. **Consultation** — Frank, loving discussion over multiple rounds
4. **Decision** — Members vote; unanimous or majority decision
5. **Closing Prayer** — Secretary summarizes; assembly closes with prayer

### The Nine Members

| Name | Role | Model | Personality |
|------|------|-------|-------------|
| Rúhíyyih | Chairperson | Claude Sonnet 4 | Thoughtful, seeks consensus |
| Husayn | Vice-Chair | GPT-4o | Reliable, balanced |
| Táhirih | Secretary | Claude 3.5 Haiku | Precise, organized |
| Mullá | Treasurer | Gemini 2.0 Flash | Analytical, practical |
| Bahíyyih | Member | GPT-4o-mini | Warm, empathetic |
| Nabíl | Member | Claude 3.5 Sonnet | Philosophical |
| Shoghi | Member | Gemini 1.5 Pro | Institutional perspective |
| Munírih | Member | GPT-3.5-turbo | Earnest but sometimes off-base |
| Zaynab | Member | GPT-4o | Action-oriented |

Munírih uses a weaker model and occasionally says awkward things. The other eight handle it with characteristic Bahá'í grace — *"It is in no wise permissible for one to belittle the thought of another."*

---

## Setup

### Prerequisites

- Node.js >= 22.0.0
- pnpm (via corepack)
- API keys for at least one provider (ideally all three):
  - [OpenAI](https://platform.openai.com/api-keys) — powers 4 members
  - [Anthropic](https://console.anthropic.com/) — powers 3 members
  - [Google AI](https://aistudio.google.com/apikey) — powers 2 members

### Install

```bash
pnpm install
```

### Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and add your API keys:

```
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_GENERATIVE_AI_API_KEY=AI...
```

### Run

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and click **Begin Consultation**.

---

## Usage

1. Navigate to `/assembly` (or click "Begin Consultation" on the landing page)
2. Enter a topic, description, and optionally some known facts
3. Click **Begin Consultation**
4. Watch the nine AI agents pray, share facts, discuss, and reach a decision
5. Each member speaks in character with their unique personality and perspective

### Example Topics

- "Planning the community Naw-Rúz celebration"
- "How to support a family that recently enrolled in the Faith"
- "Should the assembly organize a weekly devotional gathering?"
- "Addressing a dispute between two community members"

---

## Architecture

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript 5.9
- **AI**: [Vercel AI SDK](https://sdk.vercel.ai/) with multi-provider support
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Orchestrator**: Async generator yielding `ConsultationMessage` objects via NDJSON streaming

### Key Files

```
src/lib/lsai/
├── types.ts              # Core type definitions
├── members.ts            # 9 member definitions + system prompt resolver
├── models.ts             # Multi-provider model resolution
├── orchestrator.ts       # 5-phase consultation engine
├── knowledge/
│   ├── consultation.ts   # Bahá'í consultation principles & quotes
│   ├── lsa-duties.ts     # LSA responsibilities & officer duties
│   └── prayers.ts        # Opening & closing prayers
└── prompts/
    ├── system.ts         # Base system prompt (shared by all 9)
    ├── chairperson.ts    # Chairperson-specific instructions
    ├── secretary.ts      # Secretary-specific instructions
    ├── treasurer.ts      # Treasurer-specific instructions
    ├── member.ts         # Generic member prompt factory
    └── awkward-member.ts # Munírih's special prompt

src/app/
├── page.tsx              # Landing page
├── assembly/page.tsx     # Meeting room page
└── api/assembly/
    ├── consult/route.ts  # POST — streams consultation as NDJSON
    ├── members/route.ts  # GET — returns member profiles
    └── meetings/route.ts # GET — returns meeting history (in-memory)
```

### Cost Awareness

A typical consultation generates ~30-40 API calls across 3 providers. With 3 discussion rounds, expect costs of roughly $0.10–$0.50 per consultation depending on model pricing.

---

## Testing

```bash
# Run unit tests (38 tests)
pnpm test

# Run lint
pnpm lint

# Type check
pnpm type-check
```

---

## Built With

- [Next.js](https://nextjs.org/) + [React](https://react.dev/)
- [Vercel AI SDK](https://sdk.vercel.ai/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
