export function mapWines(Wines, WineCard, limit, sorted) {
  if (sorted) Wines.sort(() => Math.random() - 0.5);

  return Wines.map((wine, i) => i < limit && <WineCard wine={wine} key={wine.id} />);
}
