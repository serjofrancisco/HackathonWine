import React from 'react';
import './styles/Header.css';
import wineLogo from '../images/wine.svg';
import { Link } from 'react-router-dom';
import wineCart from '../images/wine-cart.svg';
import SearchOption from './SearchOption';

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
        <SearchOption />
        <Link to="/carrinho">
          <img alt="carrinho" src={wineCart} className="cart-icon" />
        </Link>
        <button className="btn-login">Login</button>
      </div>
    </header>
  );
}

export default Header;
