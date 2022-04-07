import React from "react";
import RestaurantSearch from "../Restaurants-Search/RestaurantsSearch";
import RestaurantLists from "../Restaurants-Lists/RestaurantLists";
import { RestaurantsData } from "../../../../contexts/Restaurants/RestaurantsContext";
import Navbar from "../../Navbar/Navbar";
import "../../css/root.css";
import "./Restaurants.css";

const Restaurants = () => {
  return (
    <>
      <Navbar />
      <main className="mb-3">
        <RestaurantSearch
          title={"Zeplin"}
          description={"Discover the best food & drinks"}
        />

        <RestaurantsData>
          <RestaurantLists />
        </RestaurantsData>
      </main>
    </>
  );
};

export default Restaurants;
