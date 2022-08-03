import Filter from "../restauranthomefilters/Filter";
import SearchMenuBar from "../dishsearchmenubar/DishSearchMenuBar";
import MobileFilter from "../restauranthomefilters/MobileFilter/MobileFilter";
import RestaurantDishes from "../restaurantdishes/RestaurantDishes";
import { FilterData } from "../../../../contexts/filters/FiltersContext";
import "./MenuSection.css";
const MenuSection = () => {
  return (
    <section className="hotel-lists gap pt-1">
      <FilterData>
        <Filter />
        <div className="menu-lists">
          <div className="menu-section mb-1 mt-1">
            <SearchMenuBar />
            <MobileFilter />
          </div>
          <RestaurantDishes />
        </div>
      </FilterData>
    </section>
  );
};

export default MenuSection;
