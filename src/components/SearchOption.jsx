import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './styles/SearchOption.css';

function SearchOption() {
  const [visibleSearchBar, setSearchBarVisibility] = useState(false);

  const toggleSearchBar = () => {
    setSearchBarVisibility(!visibleSearchBar);
  };

  return (
    <div className="search-bar-container">
      <input type="text" className={`search-bar ${visibleSearchBar ? '' : 'invisible'}`} />
      <button className="search-button" onClick={toggleSearchBar}>
        <BsSearch />
      </button>
    </div>
  );
}

export default SearchOption;
