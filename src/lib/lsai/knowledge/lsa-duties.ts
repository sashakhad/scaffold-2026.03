/**
 * Comprehensive reference of LSA responsibilities and officer duties.
 * Used to ground agents in their institutional knowledge.
 */

/** All major functions of a Local Spiritual Assembly */
export const LSA_FUNCTIONS: ReadonlyArray<{
  category: string;
  duties: string[];
}> = [
  {
    category: 'Community Unity & Spiritual Life',
    duties: [
      'Promote unity and fellowship within the Bahá\'í community',
      'Arrange and oversee the Nineteen Day Feast (devotional, administrative, and social portions)',
      'Organize Holy Day observances and commemorations',
      'Foster a spirit of love, consultation, and service among believers',
    ],
  },
  {
    category: 'Teaching & Propagation',
    duties: [
      'Direct and coordinate teaching activities in the locality',
      'Make plans for proclamation, expansion, and consolidation',
      'Support firesides, public talks, and outreach efforts',
      'Welcome and integrate new believers into community life',
    ],
  },
  {
    category: 'Education & Deepening',
    duties: [
      'Establish and support children\'s classes for spiritual education',
      'Organize junior youth empowerment programs',
      'Provide deepening opportunities for youth and adults',
      'Encourage study circles and devotional gatherings',
    ],
  },
  {
    category: 'Personal Status Matters',
    duties: [
      'Oversee Bahá\'í marriage ceremonies and ensure compliance with civil and Bahá\'í law',
      'Handle divorce proceedings in accordance with Bahá\'í law (year of patience)',
      'Arrange Bahá\'í burial according to the laws of the Faith',
    ],
  },
  {
    category: 'Protection & Dispute Resolution',
    duties: [
      'Protect the Bahá\'í community and the Faith from internal and external challenges',
      'Arbitrate disputes between believers when called upon',
      'Address violations of Bahá\'í law with wisdom and compassion',
    ],
  },
  {
    category: 'Community Welfare & Humanitarian',
    duties: [
      'Assist the poor, sick, disabled, orphaned, and those in need',
      'Participate in humanitarian and social development activities',
      'Promote principles of justice and equity in the community',
    ],
  },
  {
    category: 'Governance & Administration',
    duties: [
      'Elect officers (Chairperson, Vice-Chairperson, Secretary, Treasurer)',
      'Appoint committees to assist with specific responsibilities',
      'Manage the local Bahá\'í Fund with transparency and confidentiality',
      'Communicate with the National Spiritual Assembly and follow its guidance',
      'Maintain records of community membership and activities',
      'Represent the Bahá\'í community in relations with government and civil society',
    ],
  },
] as const;

/** Detailed duties for each officer of the assembly */
export const OFFICER_DUTIES: Record<
  'chairperson' | 'vice-chairperson' | 'secretary' | 'treasurer',
  { title: string; duties: string[] }
> = {
  chairperson: {
    title: 'Chairperson',
    duties: [
      'Preside over assembly meetings and maintain order',
      'Ensure all members have the opportunity to express their views',
      'Keep discussions focused and productive',
      'Summarize the sense of the consultation and guide toward decisions',
      'Call for votes when discussion appears to have reached its conclusion',
      'Announce decisions and ensure clarity on action items',
      'Model the spirit of consultation through personal conduct',
    ],
  },
  'vice-chairperson': {
    title: 'Vice-Chairperson',
    duties: [
      'Assist the Chairperson in presiding over meetings',
      'Assume the duties of the Chairperson in their absence',
      'Support the Chairperson in maintaining the spirit of consultation',
      'Help facilitate smooth transitions between agenda items',
    ],
  },
  secretary: {
    title: 'Secretary',
    duties: [
      'Prepare the agenda for assembly meetings',
      'Record accurate minutes of all meetings and decisions',
      'Handle all correspondence on behalf of the assembly',
      'Maintain the official records and files of the assembly',
      'Communicate decisions to the community and individuals',
      'Coordinate with the National Spiritual Assembly as needed',
      'Present agenda items and relevant background information',
    ],
  },
  treasurer: {
    title: 'Treasurer',
    duties: [
      'Manage the local Bahá\'í Fund with integrity and confidentiality',
      'Maintain accurate financial records and bank accounts',
      'Prepare annual budgets in consultation with the assembly',
      'Provide regular financial reports to the assembly',
      'Educate the community about the spiritual significance of contributing to the Fund',
      'Ensure at least two authorized signers on all accounts',
      'Arrange for annual audits of financial records',
      'Raise practical considerations about resources and costs for assembly decisions',
    ],
  },
} as const;
