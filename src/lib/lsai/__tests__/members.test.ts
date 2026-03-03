import {
  ASSEMBLY_MEMBERS,
  getChairperson,
  getSecretary,
  getTreasurer,
  getMemberById,
  getMembersByRole,
  getSystemPrompt,
} from '../members';

describe('ASSEMBLY_MEMBERS', () => {
  it('has exactly 9 members', () => {
    expect(ASSEMBLY_MEMBERS).toHaveLength(9);
  });

  it('has exactly 1 chairperson', () => {
    const chairs = ASSEMBLY_MEMBERS.filter((m) => m.role === 'chairperson');
    expect(chairs).toHaveLength(1);
  });

  it('has exactly 1 vice-chairperson', () => {
    const viceChairs = ASSEMBLY_MEMBERS.filter((m) => m.role === 'vice-chairperson');
    expect(viceChairs).toHaveLength(1);
  });

  it('has exactly 1 secretary', () => {
    const secretaries = ASSEMBLY_MEMBERS.filter((m) => m.role === 'secretary');
    expect(secretaries).toHaveLength(1);
  });

  it('has exactly 1 treasurer', () => {
    const treasurers = ASSEMBLY_MEMBERS.filter((m) => m.role === 'treasurer');
    expect(treasurers).toHaveLength(1);
  });

  it('has exactly 5 regular members', () => {
    const members = ASSEMBLY_MEMBERS.filter((m) => m.role === 'member');
    expect(members).toHaveLength(5);
  });

  it('has exactly 1 weak model member', () => {
    const weakMembers = ASSEMBLY_MEMBERS.filter((m) => m.isWeakModel);
    expect(weakMembers).toHaveLength(1);
    expect(weakMembers[0]?.id).toBe('munirih');
  });

  it('all members have unique IDs', () => {
    const ids = ASSEMBLY_MEMBERS.map((m) => m.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(9);
  });

  it('all members have non-empty names and personalities', () => {
    for (const member of ASSEMBLY_MEMBERS) {
      expect(member.name.length).toBeGreaterThan(0);
      expect(member.personality.length).toBeGreaterThan(0);
    }
  });

  it('uses valid providers', () => {
    const validProviders = new Set(['openai', 'anthropic', 'google']);
    for (const member of ASSEMBLY_MEMBERS) {
      expect(validProviders.has(member.provider)).toBe(true);
    }
  });

  it('uses at least 2 different providers', () => {
    const providers = new Set(ASSEMBLY_MEMBERS.map((m) => m.provider));
    expect(providers.size).toBeGreaterThanOrEqual(2);
  });
});

describe('getChairperson', () => {
  it('returns the chairperson', () => {
    const chair = getChairperson();
    expect(chair.role).toBe('chairperson');
    expect(chair.id).toBe('ruhiyyih');
  });
});

describe('getSecretary', () => {
  it('returns the secretary', () => {
    const secretary = getSecretary();
    expect(secretary.role).toBe('secretary');
    expect(secretary.id).toBe('tahirih');
  });
});

describe('getTreasurer', () => {
  it('returns the treasurer', () => {
    const treasurer = getTreasurer();
    expect(treasurer.role).toBe('treasurer');
    expect(treasurer.id).toBe('mulla');
  });
});

describe('getMemberById', () => {
  it('returns the correct member', () => {
    const member = getMemberById('nabil');
    expect(member).toBeDefined();
    expect(member?.name).toBe('Nabíl');
  });

  it('returns undefined for unknown ID', () => {
    const member = getMemberById('nonexistent');
    expect(member).toBeUndefined();
  });
});

describe('getMembersByRole', () => {
  it('returns all members with the given role', () => {
    const members = getMembersByRole('member');
    expect(members).toHaveLength(5);
    for (const m of members) {
      expect(m.role).toBe('member');
    }
  });
});

describe('getSystemPrompt', () => {
  it('returns a non-empty string for every member', () => {
    for (const member of ASSEMBLY_MEMBERS) {
      const prompt = getSystemPrompt(member);
      expect(typeof prompt).toBe('string');
      expect(prompt.length).toBeGreaterThan(100);
    }
  });

  it('includes consultation principles in all prompts', () => {
    for (const member of ASSEMBLY_MEMBERS) {
      const prompt = getSystemPrompt(member);
      expect(prompt).toContain('consultation');
      expect(prompt).toContain('Local Spiritual Assembly');
    }
  });

  it('chairperson prompt includes role-specific content', () => {
    const chair = getChairperson();
    const prompt = getSystemPrompt(chair);
    expect(prompt).toContain('Chairperson');
    expect(prompt).toContain('preside');
  });

  it('secretary prompt includes role-specific content', () => {
    const secretary = getSecretary();
    const prompt = getSystemPrompt(secretary);
    expect(prompt).toContain('Secretary');
    expect(prompt).toContain('agenda');
  });

  it('awkward member prompt includes personality traits', () => {
    const munirih = getMemberById('munirih')!;
    const prompt = getSystemPrompt(munirih);
    expect(prompt).toContain('Munírih');
    expect(prompt).toContain('tangent');
  });
});
