import { useEffect, useContext, useState } from 'react';
import FilterStore from '../components/FilterStore';
import { getAllWines } from '../services/shopApi';
import { mapWines, filterWines } from '../helpers/helpersWines';
import { MyDispatchContext, MyContext } from '../contexts/Context';
import WineCard from '../components/WineCard';
import Header from '../components/Header';
import '../pages/styles/StorePage.css';
export default function StorePage() {
  const { setWines } = useContext(MyDispatchContext);
  const { Wines, maxPrice, minPrice, countryFilter } = useContext(MyContext);
  const [Filter, setFilter] = useState([]);

  const getWines = async () => {
    const { items } = await getAllWines();
    setWines(items);
    if (items.length === 0) setFilter(items);
  };
  const getFilter = () => {
    const filtered = filterWines(Wines, countryFilter, minPrice, maxPrice);
    setFilter(filtered);
  };

  useEffect(() => {
    getWines();
    getFilter();
  }, [maxPrice, minPrice, countryFilter]);

  return (
    <div>
      <Header />
      <FilterStore />
      <div className="container-store">{mapWines(Filter, WineCard, 10, false, 'store')}</div>
    </div>
  );
}
