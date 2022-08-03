import { FilterContextData } from "../../contexts";
import {
  RestaurantDishes,
  MobileFilter,
  DishSearchMenuBar,
  Filter,
} from "../index";
import "./MenuSection.css";
const MenuSection = () => {
  return (
    <section className="hotel-lists gap pt-1">
      <FilterContextData>
        <Filter />
        <div className="menu-lists">
          <div className="menu-section mb-1 mt-1">
            <DishSearchMenuBar />
            <MobileFilter />
          </div>
          <RestaurantDishes />
        </div>
      </FilterContextData>
    </section>
  );
};

export { MenuSection };
