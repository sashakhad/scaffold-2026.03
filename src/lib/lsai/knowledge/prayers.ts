/**
 * Bahá'í prayers appropriate for opening and closing assembly consultations.
 * These are authentic prayers from the Bahá'í Sacred Writings.
 */

/** Prayers suitable for opening a consultation meeting */
export const OPENING_PRAYERS: ReadonlyArray<{
  text: string;
  source: string;
}> = [
  {
    text: `"O God, my God! We are servants of Thine that have turned with devotion to Thy Holy Face, that have detached ourselves from all beside Thee in this glorious Day. We have gathered in this spiritual assembly, united in our views and thoughts, with our purposes harmonized to exalt Thy Word amongst mankind. O Lord, our God! Make us the signs of Thy Divine Guidance, the Standards of Thine exalted Faith amongst men, servants to Thy mighty Covenant, O Thou our Lord Most High, manifestations of Thy Divine Unity in Thine Abhá Kingdom, and resplendent stars shining upon all regions. Lord! Aid us to become seas surging with the billows of Thy wondrous Grace, streams flowing from Thine all-glorious Heights, goodly fruits upon the Tree of Thy heavenly Cause, trees waving through the breezes of Thy Bounty in Thy celestial Vineyard. O God! Make our souls dependent upon the Verses of Thy Divine Unity, our hearts cheered with the outpourings of Thy Grace, that we may unite even as the waves of one sea and become merged together as the rays of Thine effulgent Light; that our thoughts, our views, our feelings may become as one reality, manifesting the spirit of union throughout the world. Thou art the Gracious, the Bountiful, the Bestower, the Almighty, the Merciful, the Compassionate."`,
    source: '\'Abdu\'l-Bahá — Prayer for Spiritual Assemblies',
  },
  {
    text: `"O my Lord! Make Thy beauty to be my food, and Thy presence my drink, and Thy pleasure my hope, and praise of Thee my action, and remembrance of Thee my companion, and the power of Thy sovereignty my succorer, and Thy habitation my home, and my dwelling-place the seat Thou hast sanctified from the limitations imposed upon them who are shut out as by a veil from Thee. Thou art, verily, the Almighty, the All-Glorious, the Most Powerful."`,
    source: 'Bahá\'u\'lláh',
  },
  {
    text: `"O God! O God! From the unseen Kingdom of Thy oneness supply this gathering with the lights of Thy love. Make these hearts the mirrors of the light of Thy truth and make the minds cognizant of the ocean of Thy wisdom. Connect the hearts with one another, and illuminate these thoughts so that a spiritual relationship may be established between these souls and a perfect foundation laid for universal love among mankind."`,
    source: '\'Abdu\'l-Bahá',
  },
  {
    text: `"Is there any Remover of difficulties save God? Say: Praised be God! He is God! All are His servants, and all abide by His bidding!"`,
    source: 'The Báb',
  },
] as const;

/** Prayers suitable for closing a consultation meeting */
export const CLOSING_PRAYERS: ReadonlyArray<{
  text: string;
  source: string;
}> = [
  {
    text: `"O my God! O my God! Unite the hearts of Thy servants, and reveal to them Thy great purpose. May they follow Thy commandments and abide in Thy law. Help them, O God, in their endeavor, and grant them strength to serve Thee. O God! Leave them not to themselves, but guide their steps by the light of Thy knowledge, and cheer their hearts by Thy love. Verily, Thou art their Helper and their Lord."`,
    source: 'Bahá\'u\'lláh',
  },
  {
    text: `"O Thou kind Lord! Thou hast created all humanity from the same stock. Thou hast decreed that all shall belong to the same household. In Thy Holy Presence they are all Thy servants, and all mankind are sheltered beneath Thy Tabernacle; all have gathered together at Thy Table of Bounty; all are illumined through the light of Thy Providence."`,
    source: '\'Abdu\'l-Bahá',
  },
  {
    text: `"Blessed is the spot, and the house, and the place, and the city, and the heart, and the mountain, and the refuge, and the cave, and the valley, and the land, and the sea, and the island, and the meadow where mention of God hath been made, and His praise glorified."`,
    source: 'Bahá\'u\'lláh',
  },
] as const;
