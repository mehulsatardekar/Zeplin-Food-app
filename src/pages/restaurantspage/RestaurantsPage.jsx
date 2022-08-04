import React, { useEffect } from "react";

import { RestaurantsContextData } from "../../contexts";
import { RestaurantLists, RestaurantsSearch } from "../../components";
import { Toaster } from "react-hot-toast";

import "./RestaurantsPage.css";
import { useRestroHome } from "../../contexts";

const RestaurantsPage = () => {

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main className="mb-3">
        <RestaurantsContextData>
          <RestaurantsSearch
            title={"Zeplin"}
            description={"Discover the best food & drinks"}
          />

          <RestaurantLists />
        </RestaurantsContextData>
      </main>
    </>
  );
};

export { RestaurantsPage };
