import { MyContext, MyDispatchContext } from "../../contexts/Context";
import Wines from "../mocks/wines"

const renderWithProvider = (component) => {
    return (
        <MyContext.Provider value={{Wines}}>
            <MyDispatchContext.Provider value={{setWines: () => {}}}>
                {component}
            </MyDispatchContext.Provider>
        </MyContext.Provider>
    )
  };
  export default renderWithProvider;