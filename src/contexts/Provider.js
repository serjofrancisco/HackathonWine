import { useState } from 'react';
import PropTypes from 'prop-types';
import { MyContext, MyDispatchContext } from './Context';
export default function Provider({ children }) {
  const [Wines, setWines] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [countryFilter, setCountryFilter] = useState('');

  return (
    <MyContext.Provider value={{ Wines, maxPrice, minPrice, countryFilter }}>
      <MyDispatchContext.Provider value={{ setWines, setCountryFilter, setMaxPrice, setMinPrice }}>
        {children}
      </MyDispatchContext.Provider>
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
