import { useContext, useEffect } from 'react';
import { mapWines } from '../helpers/helpersWines';
import WineCard from '../components/WineCard';
import { MyDispatchContext, MyContext } from '../contexts/Context';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './styles/Checkout.css';
export default function CartPage() {
  const { Total } = useContext(MyContext);
  const { setTotal } = useContext(MyDispatchContext);
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  function getTotal() {
    let fullPrice = Total;
    cartItems.forEach((item) => {
      fullPrice += item.price;
    });
    setTotal(fullPrice);
  }
  useEffect(() => {
    getTotal();
  }, []);
  return (
    <div>
      <Header />
      <h1>{`Total R$ ${Total}`}</h1>
      {mapWines(cartItems, WineCard, 100, true, 'cart')}
      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
}
