import useState from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyContext from './context';

export default function Provider({ children }) {
  const { Wines, setWines } = useState([]);
  return <MyContext.Provider value={(Wines, setWines)}>{children}</MyContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
