import { CONSULTATION_PRINCIPLES, CONSULTATION_PROCESS, UNITY_AFTER_DECISION } from '../knowledge/consultation';
import { LSA_FUNCTIONS, OFFICER_DUTIES } from '../knowledge/lsa-duties';
import { OPENING_PRAYERS, CLOSING_PRAYERS } from '../knowledge/prayers';

describe('Consultation Knowledge', () => {
  it('has multiple consultation principles', () => {
    expect(CONSULTATION_PRINCIPLES.length).toBeGreaterThanOrEqual(5);
  });

  it('principles contain authentic quotes', () => {
    const allText = CONSULTATION_PRINCIPLES.join(' ');
    expect(allText).toContain('purity of motive');
    expect(allText).toContain('truth');
  });

  it('has 4 consultation process steps', () => {
    expect(CONSULTATION_PROCESS.steps).toHaveLength(4);
  });

  it('process steps are numbered 1-4', () => {
    for (let i = 0; i < 4; i++) {
      expect(CONSULTATION_PROCESS.steps[i]?.number).toBe(i + 1);
    }
  });

  it('unity after decision has quote and explanation', () => {
    expect(UNITY_AFTER_DECISION.quote.length).toBeGreaterThan(0);
    expect(UNITY_AFTER_DECISION.explanation.length).toBeGreaterThan(0);
    expect(UNITY_AFTER_DECISION.principle.length).toBeGreaterThan(0);
  });
});

describe('LSA Duties', () => {
  it('has multiple duty categories', () => {
    expect(LSA_FUNCTIONS.length).toBeGreaterThanOrEqual(5);
  });

  it('each category has duties', () => {
    for (const category of LSA_FUNCTIONS) {
      expect(category.duties.length).toBeGreaterThan(0);
      expect(category.category.length).toBeGreaterThan(0);
    }
  });

  it('has officer duties for all 4 officers', () => {
    expect(OFFICER_DUTIES.chairperson).toBeDefined();
    expect(OFFICER_DUTIES['vice-chairperson']).toBeDefined();
    expect(OFFICER_DUTIES.secretary).toBeDefined();
    expect(OFFICER_DUTIES.treasurer).toBeDefined();
  });

  it('each officer has at least 3 duties', () => {
    for (const role of Object.values(OFFICER_DUTIES)) {
      expect(role.duties.length).toBeGreaterThanOrEqual(3);
    }
  });
});

describe('Prayers', () => {
  it('has at least 3 opening prayers', () => {
    expect(OPENING_PRAYERS.length).toBeGreaterThanOrEqual(3);
  });

  it('has at least 2 closing prayers', () => {
    expect(CLOSING_PRAYERS.length).toBeGreaterThanOrEqual(2);
  });

  it('all prayers have text and source', () => {
    for (const prayer of OPENING_PRAYERS) {
      expect(prayer.text.length).toBeGreaterThan(0);
      expect(prayer.source.length).toBeGreaterThan(0);
    }
    for (const prayer of CLOSING_PRAYERS) {
      expect(prayer.text.length).toBeGreaterThan(0);
      expect(prayer.source.length).toBeGreaterThan(0);
    }
  });
});
