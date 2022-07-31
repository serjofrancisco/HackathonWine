import React from 'react';
import './styles/Header.css';
import wineLogo from '../images/wine.svg';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import wineCart from '../images/wine-cart.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img alt="Wine" src={wineLogo} />
        </Link>
        <Link to="/clube">
          <span>Clube</span>
        </Link>
        <Link to="/loja">
          <span>Loja</span>
        </Link>
        <Link to="/">
          <span>Produtores</span>
        </Link>
        <Link to="/">
          <span>Ofertas</span>
        </Link>
      </div>
      <div className="header-rigth">
        <BsSearch />
        <Link to="/carrinho">
          <img alt="carrinho" src={wineCart} className="cart-icon" />
        </Link>
        <button className="btn-login">Login</button>
      </div>
    </header>
  );
}

export default Header;
