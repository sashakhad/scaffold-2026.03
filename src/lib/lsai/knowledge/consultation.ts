/**
 * Bahá'í writings and principles on consultation.
 * These are authentic quotes and teachings used to ground the AI agents
 * in proper Bahá'í consultation practice.
 */

/** Key quotes from the Bahá'í Writings on consultation */
export const CONSULTATION_PRINCIPLES: string[] = [
  // 'Abdu'l-Bahá, Selections from the Writings of 'Abdu'l-Bahá, §43
  `"The prime requisites for them that take counsel together are purity of motive, radiance of spirit, detachment from all else save God, attraction to His Divine Fragrances, humility and lowliness amongst His loved ones, patience and long-suffering in difficulties and servitude to His exalted Threshold."`,

  // 'Abdu'l-Bahá, Selections from the Writings of 'Abdu'l-Bahá, §43
  `"The first condition is absolute love and harmony amongst the members of the assembly. They must be wholly free from estrangement and must manifest in themselves the Unity of God, for they are the waves of one sea, the drops of one river, the stars of one heaven, the rays of one sun, the trees of one orchard, the flowers of one garden."`,

  // 'Abdu'l-Bahá, Selections from the Writings of 'Abdu'l-Bahá, §43
  `"The second condition: They must when coming together turn their faces to the Kingdom on High and ask aid from the Realm of Glory."`,

  // 'Abdu'l-Bahá, Selections from the Writings of 'Abdu'l-Bahá, §44
  `"The members thereof must take counsel together in such wise that no occasion for ill-feeling or discord may arise. This can be attained when every member expresseth with absolute freedom his own opinion and setteth forth his argument. Should anyone oppose, he must on no account feel hurt for not until matters are fully discussed can the right way be revealed."`,

  // 'Abdu'l-Bahá, Promulgation of Universal Peace
  `"The shining spark of truth cometh forth only after the clash of differing opinions."`,

  // 'Abdu'l-Bahá, Selections from the Writings of 'Abdu'l-Bahá, §44
  `"They must in every matter search out the truth and not insist upon their own opinion, for stubbornness and persistence in one's views will lead ultimately to discord and wrangling and the truth will remain hidden."`,

  // Bahá'u'lláh, Gleanings from the Writings of Bahá'u'lláh
  `"Take ye counsel together in all matters, inasmuch as consultation is the lamp of guidance which leadeth the way, and is the bestower of understanding."`,

  // 'Abdu'l-Bahá on unity after decision
  `"It is in no wise permissible for one to belittle the thought of another, nay, he must with moderation set forth the truth."`,
];

/** The four-step Bahá'í consultation process */
export const CONSULTATION_PROCESS = {
  steps: [
    {
      number: 1,
      title: 'Ascertain the Facts',
      description:
        'Obtain and accept all facts related to the matter under discussion. Ensure the assembly has a clear, shared understanding of the situation.',
    },
    {
      number: 2,
      title: 'Consult the Writings',
      description:
        "Review relevant guidance and principles from the Bah\u00e1'\u00ed Sacred Writings and the guidance of the Universal House of Justice.",
    },
    {
      number: 3,
      title: 'Frank Discussion',
      description:
        'Undertake full and frank discussion, with each member expressing their views freely and courteously. Search for truth through the clash of differing opinions.',
    },
    {
      number: 4,
      title: 'Reach a Decision',
      description:
        'Arrive at a decision, preferably unanimous. If unanimity cannot be reached, the majority decision prevails. Once a decision is made, all members must wholeheartedly support it.',
    },
  ],
  summary:
    "Bah\u00e1'\u00ed consultation is a spiritual practice grounded in prayer, detachment, and the search for truth. It requires frankness with courtesy, and unity of purpose both before and after the decision.",
} as const;

/** The principle of unity after decision — critical to Bahá'í governance */
export const UNITY_AFTER_DECISION = {
  principle:
    'Once a decision is reached by the assembly, all members must wholeheartedly support it, regardless of their individual views during the discussion.',
  quote:
    '"If they agree upon a subject, even though it be wrong, it is far better than to disagree and be in the right, for this difference will produce the demolition of the divine foundation." — \'Abdu\'l-Bahá',
  explanation:
    'This principle ensures that the authority and dignity of the institution is maintained. The assembly can always revisit a decision if new information comes to light, but dissent after a vote undermines the institution itself.',
} as const;
