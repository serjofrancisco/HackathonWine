export function mapWines(Wines, WineCard, limit, sorted) {
  if (sorted) Wines.sort(() => Math.random() - 0.5);

  return Wines.map((wine, i) => i < limit && <WineCard wine={wine} key={wine.id} />);
}

export function filterWines(Wines, countryFilter, minPrice, maxPrice) {
  return Wines.filter((wine) => {
    return (
      wine.price >= minPrice &&
      wine.price <= maxPrice &&
      wine.country.toLowerCase().includes(countryFilter.toLowerCase())
    );
  });
}
