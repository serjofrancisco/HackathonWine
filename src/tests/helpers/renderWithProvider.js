import { MyContext, MyDispatchContext } from '../../contexts/Context';
import Wines from '../mocks/wines';

const renderWithProvider = (component) => {
  const setMaxPrice = () => {};
  const setMinPrice = () => {};
  const setCountryFilter = () => {};
  const setWines = () => {};
  return (
    <MyContext.Provider value={{ Wines, maxPrice: 0, minPrice: 0, countryFilter: '' }}>
      <MyDispatchContext.Provider value={{ setWines, setMaxPrice, setMinPrice, setCountryFilter }}>
        {component}
      </MyDispatchContext.Provider>
    </MyContext.Provider>
  );
};
export default renderWithProvider;
