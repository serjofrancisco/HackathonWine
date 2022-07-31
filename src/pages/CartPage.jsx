import { useContext, useEffect } from 'react';
import { mapWines } from '../helpers/helpersWines';
import WineCard from '../components/WineCard';
import { MyDispatchContext, MyContext } from '../contexts/Context';
import { Link } from 'react-router-dom';
import './styles/Checkout.css';
export default function CartPage() {
  const { Total } = useContext(MyContext);
  const { setTotal } = useContext(MyDispatchContext);
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  let total = 0;
  function getTotal() {
    total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    setTotal(total);
  }
  useEffect(() => {
    getTotal();
  }, []);
  return (
    <div className="items">
      <h1>{`Total R$ ${Total}`}</h1>
      {mapWines(cartItems, WineCard, 100, true, 'cart')}
      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
}
