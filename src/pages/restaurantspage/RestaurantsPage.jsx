import React from "react";

import { RestaurantsContextData } from "../../contexts";
import { RestaurantLists, RestaurantsSearch } from "../../components";
import { Toaster } from "react-hot-toast";

import "./RestaurantsPage.css";
const RestaurantsPage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main className="mb-3">
        <RestaurantsSearch
          title={"Zeplin"}
          description={"Discover the best food & drinks"}
        />

        <RestaurantsContextData>
          <RestaurantLists />
        </RestaurantsContextData>
      </main>
    </>
  );
};

export { RestaurantsPage };
