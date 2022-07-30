import { useContext, useEffect } from 'react';
import getAllWines from '../services/shopApi';
import Context from '../contexts/context';
import WineCard from './WineCard';
import mapWines from '../helpers/mapWines';

export default function WineBanner() {
  const { Wines, setWines } = useContext(Context);

  const getWines = async () => {
    if (!Wines.length) {
      const wines = await getAllWines();
      setWines(wines);
    }
  };

  useEffect(() => {
    getWines();
  }, []);

  return <div>{mapWines((Wines, WineCard))}</div>;
}
