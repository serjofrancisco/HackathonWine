import { useContext, useEffect } from 'react';
import { MyContext, MyDispatchContext } from '../contexts/Context';
import WineCard from './WineCard';
import { mapWines } from '../helpers/helpersWines';
import { getAllWines } from '../services/shopApi';
import Carousel from './Carousel';
import './styles/WineCard.css';

export default function WineBanner() {
  const { Wines } = useContext(MyContext);
  const { setWines } = useContext(MyDispatchContext);

  const getWines = async () => {
    if (!Wines.length) {
      const { items } = await getAllWines();
      setWines(items);
    }
  };

  useEffect(() => {
    getWines();
  }, []);

  return (
    <section className="container-section-wine-card" data-testid="wine-banner">
      {Wines.length && (
        <Carousel perView="4" autoplay="1500">
          {mapWines(Wines, WineCard, 60, true, 'banner')}
        </Carousel>
      )}
    </section>
  );
}
