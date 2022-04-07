import "../../css/root.css";
import "./Home.css";
import Offers from "../Offer/Offers";
import TopBrands from "../TopBrands/TopBrands";
import TopRestaurants from "../TopRestaurants/TopRestaurants";
import Navbar from "../../Navbar/Navbar";

import { RestaurantsData } from "../../../../contexts/Restaurants/RestaurantsContext";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="mb-3">
        <Offers />
        <TopBrands />

        <RestaurantsData>
          <TopRestaurants />
        </RestaurantsData>
      </main>
    </>
  );
};

export default Home;
