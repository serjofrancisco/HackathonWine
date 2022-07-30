import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../contexts/Context';

export default function FilterStore() {
  const { Wines } = useContext(MyContext);
  //   const [maxPrice, setMaxPrice] = useState(0);
  //   const [minPrice, setMinPrice] = useState(0);
  //   const [countryFilter, setCountryFilter] = useState('');
  const [countries, serCountries] = useState([]);
  const renderFilters = () => {
    let countries = Wines.map((wine) => wine.country);
    let nonRepeated = [...new Set(countries)];
    serCountries(nonRepeated);
  };

  useEffect(() => {
    renderFilters();
  }, []);

  function mapFilter() {
    return countries.map((country) => (
      <>
        <input key={country} type="radio" value={country} name="countries" />
        <label htmlFor={country}>{country}</label>
      </>
    ));
  }
  return <form name="countries">{mapFilter()}</form>;
}
