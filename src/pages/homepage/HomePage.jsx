import React from "react";
import { Offers, TopBrands, TopRestaurants } from "../../components";
import { RestaurantsContextData } from "../../contexts";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main className="mb-3">
        <Offers />
        <TopBrands />

        <RestaurantsContextData>
          <TopRestaurants />
        </RestaurantsContextData>
      </main>
    </>
  );
};

export { HomePage };
