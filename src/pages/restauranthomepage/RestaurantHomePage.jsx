import "./RestaurantHomePage.css";

import { RestaurantDescription, MenuSection } from "../../components";
import { RestaurantHomeData } from "../../contexts";
import { Toaster } from "react-hot-toast";

const RestaurantHomePage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <main className="mb-3">
        <RestaurantHomeData>
          <RestaurantDescription />
          <MenuSection />
        </RestaurantHomeData>
      </main>
    </>
  );
};

export { RestaurantHomePage };
