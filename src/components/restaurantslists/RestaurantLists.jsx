import React from "react";
import { RestaurantCard } from "../index";
import "./RestaurantLists.css";

const RestaurantLists = () => {
  return (
    <section className="restro-lists-container con">
      {/* <RestaurantFilter/> */}
      <div className="flex flex-wrap gap pb-3 flex-justify-center">
        {/* card starts here */}
        <RestaurantCard />
      </div>
    </section>
  );
};

export { RestaurantLists };
