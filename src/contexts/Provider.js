import { useState } from 'react';
import PropTypes from 'prop-types';
import { MyContext, MyDispatchContext } from './Context';
export default function Provider({ children }) {
  const [Wines, setWines] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [countryFilter, setCountryFilter] = useState('');
  const [Total, setTotal] = useState(0);

  return (
    <MyContext.Provider value={{ Wines, maxPrice, minPrice, countryFilter, Total }}>
      <MyDispatchContext.Provider
        value={{ setWines, setCountryFilter, setMaxPrice, setMinPrice, setTotal }}>
        {children}
      </MyDispatchContext.Provider>
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
