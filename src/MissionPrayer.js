import Prayer from './Prayer';

const prayers = [
  `Almighty and everlasting God, who alone works great marvels:
  Send down upon our clergy and the congregations committed
  to their charge the life-giving Spirit of your grace, shower
  them with the continual dew of your blessing, and ignite in
  them a zealous love of your Gospel; through Jesus Christ our
  Lord. Amen.`,
  `O God, you have made of one blood all the peoples of the earth,
  and sent your blessed Son to preach peace to those who are far
  off and to those who are near: Grant that people everywhere
  may seek after you and find you; bring the nations into your
  fold; pour out your Spirit upon all flesh; and hasten the coming
  of your kingdom; through Jesus Christ our Lord. Amen.`,
  `Lord Jesus Christ, you stretched out your arms of love on the
  hard wood of the Cross that everyone might come within the
  reach of your saving embrace: So clothe us in your Spirit that
  we, reaching forth our hands in love, may bring those who do
  not know you to the knowledge and love of you; for the honor
  of your Name. Amen.`,
  `Almighty and everlasting God, you multiply your Church in
  every generation: Grant the gifts of faith and understanding to
  those being instructed in your holy Word; that being washed in
  the waters of Baptism, they may be born again and numbered
  among your adopted children; through Jesus Christ our Lord.
  Amen.`,
];

function MissionPrayer({ ndx }) {
  const prayer_text = prayers[ndx];
  const title_text = "A Prayer for Mission";
  return <Prayer title={title_text} prayer={prayer_text} />;
}

export default MissionPrayer;
