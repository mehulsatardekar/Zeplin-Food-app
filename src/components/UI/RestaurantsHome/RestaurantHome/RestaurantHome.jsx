import "../../css/root.css";
import "./RestaurantHome.css";

import React from "react";

import Navbar from "../../Navbar/Navbar";
import RestaurantDesc from "../RestaurantDesc/RestaurantDesc";
import MenuSection from "../MenuSection/MenuSection";

import { RestaurantHomeData } from "../../../../contexts/Restaurant-Home/RestaurantHomeContext";

const RestaurantHome = () => {
  return (
    <>
      <Navbar />
      <main className="mb-3">
        <RestaurantHomeData>
          <RestaurantDesc />
          <MenuSection />
        </RestaurantHomeData>
      </main>
    </>
  );
};

export default RestaurantHome;
