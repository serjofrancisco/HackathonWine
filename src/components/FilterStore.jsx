import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../contexts/Context';

export default function FilterStore() {
  const { Wines } = useContext(MyContext);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [countryFilter, setCountryFilter] = useState('');
  const [countries, setCountries] = useState([]);

  const renderFilters = () => {
    let countries = Wines.map((wine) => wine.country);
    let nonRepeated = [...new Set(countries)];
    setCountries(nonRepeated);
    let maxPrice = Wines.map((wine) => wine.price);
    console.log(maxPrice);
    setMaxPrice(maxPrice);
    let minPrice = Wines.map((wine) => wine.price);
    console.log(minPrice);
    setMinPrice(minPrice);
  };

  useEffect(() => {
    renderFilters();
  }, []);

  const getValue = ({ target }) => {
    setCountryFilter(target.value);
  };
  function mapFilter() {
    return countries.map((country) => (
      <>
        <input onChange={getValue} key={country} type="radio" value={country} name="countries" />
        <label htmlFor={country}>{country}</label>
      </>
    ));
  }
  return (
    <div>
      {' '}
      <form name="countries">{mapFilter()}</form>
      <form>
        <input type="number" value={maxPrice} />
        <input type="number" value={minPrice} />
      </form>
    </div>
  );
}
