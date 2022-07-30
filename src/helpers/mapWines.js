export default function mapWines(Wines, WineCard) {
  const sortedWines = Wines.sort(() => Math.random() - 0.5);
  sortedWines.map((wine, i) => {
    i < 10 && <WineCard wine={wine} key={wine.id} />;
  });
}
