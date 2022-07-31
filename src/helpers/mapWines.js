export default function mapWines(Wines, WineCard, limit, sorted) {
  console.log(Wines);
  if (sorted) Wines.sort(() => Math.random() - 0.5);

  console.log(Wines);
  return Wines.map((wine, i) => i < limit && <WineCard wine={wine} key={wine.id} />);
}
