import React from 'react';
import wineLogo from '../images/wine.svg';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

function Header() {
  return (
    <header className="header">
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
    </header>
  );
}

export default Header;
