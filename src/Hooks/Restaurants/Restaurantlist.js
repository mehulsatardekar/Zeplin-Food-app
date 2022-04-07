import {useState} from "react";

const RestaurantList = ()=>{
    const [restaurants, setRestaurants] = useState(null);
    const productFetch = async () => {
      try {
        const restaurantData = await fetch("/api/products");
        const restaurantJson = await restaurantData.json();
        setRestaurants(restaurantJson.products);
      } catch (e) {
        setRestaurants("error occured");
      }
    };
   return {restaurants,setRestaurants ,productFetch};
}

export default RestaurantList;