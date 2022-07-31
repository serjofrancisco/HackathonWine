import { useContext, useState, useEffect } from 'react';
import { MyContext, MyDispatchContext } from '../contexts/Context';
export default function FilterStore() {
  const { Wines, maxPrice, minPrice } = useContext(MyContext);
  const { setCountryFilter, setMaxPrice, setMinPrice } = useContext(MyDispatchContext);
  const [countries, setCountries] = useState([]);
  const [vinhos, setVinhos] = useState([]);
  const renderFilters = () => {
    let countries = vinhos.map((wine) => wine.country);
    let nonRepeated = [...new Set(countries)];
    setCountries(nonRepeated);
    let prices = vinhos.map((wine) => wine.price);
    const max = prices.reduce((a, b) => Math.max(a, b), -Infinity);
    setMaxPrice(max);
    const min = prices.reduce((a, b) => Math.min(a, b), Infinity);
    setMinPrice(min);
  };

  const putOnState = () => {
    if (vinhos.length === 0) setVinhos(Wines);
    renderFilters();
  };

  useEffect(() => {
    putOnState();
  }, [Wines]);

  const getValue = ({ target }) => {
    setCountryFilter(target.value);
  };
  function mapFilter() {
    return countries.map((country, i) => (
      <label key={i} htmlFor={country}>
        <input onChange={getValue} key={country} type="radio" value={country} name="countries" />
        {country}
      </label>
    ));
  }
  return (
    <div>
      {' '}
      <form>
        <div name="countries">{mapFilter()}</div>
        <input
          key="minimo"
          type="number"
          value={minPrice}
          onChange={({ target }) => setMinPrice(target.value)}
        />
        <input
          key="maximo"
          type="number"
          value={maxPrice}
          onChange={({ target }) => setMaxPrice(target.value)}
        />
      </form>
    </div>
  );
}
