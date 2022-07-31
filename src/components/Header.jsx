import React from 'react';
import './styles/Header.css';
import wineLogo from '../images/wine.svg';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import wineCart from '../images/wine-cart.svg';

function Header() {
  return (
    <header className="container-geral-header" data-testid="header">
      <div className="header-left">
        <Link to="/">
          <img className="header-logo-wine" alt="Wine" src={wineLogo} />
        </Link>
        <Link to="/clube">
          <span>Clube</span>
        </Link>
        <Link to="/loja">
          <span>Loja</span>
        </Link>
        <Link to="/produtores">
          <span>Produtores</span>
        </Link>
        <Link to="/ofertas">
          <span>Ofertas</span>
        </Link>
      </div>
      <div className="header-rigth">
        <BsSearch />
        <Link to="/cart">
          <img alt="carrinho" src={wineCart} className="cart-icon" />
        </Link>
        <button className="btn-login">
          <div>
            <FiLogIn />
          </div>
          <span className="login">Login</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
