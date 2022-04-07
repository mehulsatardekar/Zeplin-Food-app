import Filter from "../Filter/Filter";
import SearchMenuBar from "../SearchMenuBar/SearchMenuBar";
import MobileFilter from "../Filter/MobileFilter/MobileFilter";
import RestaurantDishes from "../RestaurantDishes/RestaurantDishes";
import { FilterData } from "../../../../contexts/Filters/FiltersContext";
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
