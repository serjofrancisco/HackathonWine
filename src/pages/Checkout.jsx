import { useContext } from 'react';
import { mapWines } from '../helpers/helpersWines';
import WineCard from '../components/WineCard';
import { MyContext } from '../contexts/Context';
import { Link } from 'react-router-dom';
import './styles/Checkout.css';

export default function Checkout() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const { Total } = useContext(MyContext);
  return (
    <div>
      <h1>{`Total R$ ${Total}`}</h1>
      {mapWines(cartItems, WineCard, 100, false, 'cart')}
      <Link to="/finalizada">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
}
