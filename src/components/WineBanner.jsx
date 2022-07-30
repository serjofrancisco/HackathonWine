import { useContext, useEffect } from 'react';
import { getAllWines } from '../services/shopApi';
import { MyContext, MyDispatchContext } from '../contexts/Context';
import WineCard from './WineCard';
import { mapWines } from '../helpers/helpersWines';

export default function WineBanner() {
  const { Wines } = useContext(MyContext);
  const { setWines } = useContext(MyDispatchContext);

  const getWines = async () => {
    const { items } = await getAllWines();
    setWines(items);
  };

  useEffect(() => {
    getWines();
  }, []);

  return <div>{mapWines(Wines, WineCard, 10, true)}</div>;
}
