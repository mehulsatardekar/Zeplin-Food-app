import { useState } from "react";
import { useToast } from "../../contexts";

const useRestaurantList = () => {
  const { notifySuccess, notifyError } = useToast();

  const [restaurants, setRestaurants] = useState(null);
  const productFetch = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setRestaurants(data.products);
    } catch (error) {
      notifyError("Error Occured While fetching data");
    }
  };
  return { restaurants, setRestaurants, productFetch };
};

export { useRestaurantList };
