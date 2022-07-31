import React from 'react';
import './styles/Header.css';
import wineLogo from '../images/wine.svg';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import cartIcon from '../images/cartIcon.png';

function Header() {
  return (
    <header className="header" data-testid="header">
      <Link to="/">
        <img alt="Wine" src={wineLogo} />
      </Link>
      <Link to="/clube">
        <span>Clube</span>
      </Link>
      <Link to="/loja">
        <span>Loja</span>
      </Link>
      <BsSearch />
      <Link to="/carrinho">
        <img alt="carrinho" src={cartIcon} className="cart-icon" />
      </Link>
    </header>
  );
}

export default Header;
