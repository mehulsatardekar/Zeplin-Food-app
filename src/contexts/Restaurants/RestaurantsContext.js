import { createContext } from "react";
import RestaurantListHook from "../../Hooks/Restaurants/Restaurantlist";
const RestroHome = createContext();

const RestaurantsData = ({children})=>{
    const {restaurants,setRestaurants,productFetch} = RestaurantListHook();
    const defaultValue = {restaurants,setRestaurants,productFetch}

    return(
        <RestroHome.Provider value={defaultValue}>
          {children}
        </RestroHome.Provider>
    )
}
export {RestroHome, RestaurantsData};