import { createContext } from "react";
import RestaurantHomeHook from "../../Hooks/RestaurantHome/RestaurantHome";
const RestaurantHomeContext = createContext();

const RestaurantHomeData = ({ children }) => {
  const { restroDishes, setRestroDishes, fetchData } = RestaurantHomeHook();

  return (
    <RestaurantHomeContext.Provider
      value={{ restroDishes, setRestroDishes, fetchData }}
    >
      {children}
    </RestaurantHomeContext.Provider>
  );
};

export { RestaurantHomeContext, RestaurantHomeData };
