import React from 'react';
import PropTypes from 'prop-types';
import { MyContext, MyDispatchContext } from './Context';
export default function Provider({ children }) {
  const [Wines, setWines] = React.useState([]);
  return (
    <MyContext.Provider value={{ Wines }}>
      <MyDispatchContext.Provider value={{ setWines }}>{children}</MyDispatchContext.Provider>
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
