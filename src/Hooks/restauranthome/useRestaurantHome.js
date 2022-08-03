import { useState } from "react";
import { useParams } from "react-router-dom";

const useRestaurantHome = () => {
  const [restroDishes, setRestroDishes] = useState([]);
  const params = useParams();

  const url = `/api/products/${params.prodid}`;

  const fetchData = async () => {
    const data = await fetch(url);
    const jsonData = await data.json();
    setRestroDishes(jsonData.product);
  };

  return { restroDishes, setRestroDishes, fetchData };
};

export { useRestaurantHome };
