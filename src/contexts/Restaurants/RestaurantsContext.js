import { createContext, useContext } from "react";
import { useRestaurantList } from "../../Hooks";

const RestroHome = createContext();

const RestaurantsContextData = ({ children }) => {
  const { restaurants, setRestaurants, productFetch } = useRestaurantList();
  const defaultValue = { restaurants, setRestaurants, productFetch };

  return (
    <RestroHome.Provider value={defaultValue}>{children}</RestroHome.Provider>
  );
};

const useRestroHome = () => useContext(RestroHome);

export { useRestroHome, RestaurantsContextData };
