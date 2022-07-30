import { useEffect, useContext } from 'react';
import FilterStore from '../components/FilterStore';
import { getAllWines } from '../services/shopApi';
import { MyDispatchContext } from '../contexts/Context';
export default function StorePage() {
  const { setWines } = useContext(MyDispatchContext);

  const getWines = async () => {
    const { items } = await getAllWines();
    setWines(items);
  };

  useEffect(() => {
    getWines();
  }, []);

  return <FilterStore />;
}
