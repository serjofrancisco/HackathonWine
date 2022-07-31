import React from 'react';
import './styles/Header.css';
import wineLogo from '../images/wine.svg';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import cartIcon from '../images/cartIcon.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img alt="Wine" src={wineLogo} />
        </Link>
      </div>
      <div className="header-container-loja-clube">
        <div className="header-clube">
          <Link to="/clube">
            <span>Clube</span>
          </Link>
        </div>
        <div className="header-loja">
          <Link to="/loja">
            <span>Loja</span>
          </Link>
        </div>
      </div>
      <div className="header-search">
        <BsSearch />
      </div>
      <div className="header-container-cart">
        <div className="header-cart">
          <Link to="/carrinho">
            <img alt="carrinho" src={cartIcon} className="cart-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
