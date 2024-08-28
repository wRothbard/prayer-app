import Prayer from './Prayer';

const prayers = [
  `Eternal God, in whose perfect kingdom no sword is drawn but
  the sword of righteousness, no strength known but the strength
  of love: So mightily spread abroad your Spirit, that all peoples
  may be gathered under the banner of the Prince of Peace; to
  whom be dominion and glory, now and for ever. Amen.`,

  `Almighty God, from whom all thoughts of truth and peace
  proceed: Kindle, we pray, in the hearts of all people the true love
  of peace, and guide with your pure and peaceable wisdom those
  who take counsel for the nations of the earth; that in tranquility
  your kingdom may go forward, till the earth is filled with the
  knowledge of your love; through Jesus Christ our Lord. Amen.`,

  `Lord God of infinite mercy, we humbly beg you to look down with
  pity upon the nations now engaged in war.  Don't count against your
  people their many iniquities, for from the lusts of our own hearts
  come wars and fightings among us.  Look with compassion on those
  exposed now to peril, conflict, sickness, and death; comfort the
  prisoners, relieve the sufferings of the wounded, and show mercy
  to the dying.  Tenderly regard those who abide at home in fear,
  privation, and sorrow.  Remove in your good providence all causes
  and occasions of war; and from your great goodness restore peace
  among the nations; through Jesus Christ our Lord.  Amen`,

  `Gracious God, the comfort of all who sorrow, the strength of all who
  suffer: Let the cry of those in misery and need come to you, that
  they may find your mercy present with them in all their afflictions;
  and give us, we pray, the strength to serve them, for the sake of
  him who suffered for us, your Son Jesus Christ our Lord. Amen.`,
];

function PeacePrayer({ ndx }) {
  const prayer_text = prayers[ndx];
  const title_text = "Prayer for Peace";
  return <Prayer title={title_text} prayer={prayer_text} />;
}

export default PeacePrayer;
