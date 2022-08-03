import { createContext, useContext } from "react";
import { useRestaurantHome } from "../../Hooks";

const RestaurantHomeContext = createContext(null);

const RestaurantHomeData = ({ children }) => {
  const { restroDishes, setRestroDishes, fetchData } = useRestaurantHome();

  return (
    <RestaurantHomeContext.Provider
      value={{ restroDishes, setRestroDishes, fetchData }}
    >
      {children}
    </RestaurantHomeContext.Provider>
  );
};

const useRestaurantHomeContext = () => useContext(RestaurantHomeContext);
export { useRestaurantHomeContext, RestaurantHomeData };
