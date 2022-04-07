import { useContext } from "react";
import { RestaurantHomeContext } from "../../../../contexts/Restaurant-Home/RestaurantHomeContext";
import { FilterContext } from "../../../../contexts/Filters/FiltersContext";
import "./Filter.css";
const Filter = () => {
  const { restroDishes } = useContext(RestaurantHomeContext);

  const { state, dispatch } = useContext(FilterContext);

  const dishClickHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: "CHECK", payload: e.target.value });
      return;
    } else {
      dispatch({ type: "UNCHECK", payload: e.target.value });
    }
  };

  return (
    <div className="filters shadow-md mt-1">
      <div className="flex flex-column py">
        <div className="flex flex-between">
          <span>Filters</span>
          <button
            className="btn-primary btn-sm btn"
            onClick={(e) => dispatch({ type: "CELAR_FILTER" })}
          >
            Clear
          </button>
        </div>
        <div className="flex flex-column flex-wrap mt-1">
          <span className="font-bold py">Price Filter</span>
          <div className="flex flex-column gap-1 mb-1 my-1">
            <input
              type="range"
              className="slider slider-primary"
              id="rangeSlider"
              aria-describedby="range-slider"
              value={state.filterVal}
              min="100"
              max="1000"
              step="100"
              onChange={(e) =>
                dispatch({ type: "FILTER_VAL", payload: e.target.value })
              }
            />
            <label
              htmlFor="rangeSlider"
              id="rangeSliderText"
              className="label-text label-text-primary"
            >
              {state.filterVal}
            </label>
          </div>
        </div>

        <div className="flex flex-column flex-wrap mt-1">
          <span className="font-bold py">Category</span>
          <div className="flex flex-wrap flex-align-item-center gap-1">
            <input
              type="radio"
              name="category"
              onChange={(e) =>
                dispatch({ type: "SORT_ASC", payload: e.target.value })
              }
              className="input-checkbox label-text-primary"
              id="non-veg-chckbox"
              value={restroDishes?.category?.[0]}
              checked={state.selectType === restroDishes?.category?.[0]}
            />
            <label htmlFor="non-veg-chckbox" className="label-text">
              veg
            </label>

            <input
              type="radio"
              name="category"
              onChange={(e) =>
                dispatch({ type: "SORT_DESC", payload: e.target.value })
              }
              className="input-checkbox label-text-primary"
              id="veg-chckbox"
              value={restroDishes?.category?.[1]}
              checked={state.selectType === restroDishes?.category?.[1]}
            />
            <label htmlFor="veg-chckbox" className="label-text">
              nonveg
            </label>
          </div>
        </div>

        <div className="flex flex-column flex-wrap mt-1">
          <span className="font-bold py">Types</span>

          {restroDishes?.types?.map((dish, i) => {
            return (
              <div
                className="flex flex-wrap flex-align-item-center gap-1"
                key={i}
              >
                <input
                  type="checkbox"
                  onChange={dishClickHandler}
                  value={dish}
                  className="input-checkbox label-text-primary"
                  id={dish}
                  checked={state.dishTypes.includes(dish)}
                />
                <label htmlFor={dish} className="label-text">
                  {dish}
                </label>
              </div>
            );
          })}
        </div>

        <div className="flex flex-column flex-wrap mt-1">
          <span className="font-bold py">Sort By</span>
          <div className="flex flex-wrap flex-align-item-center gap-1">
            <input
              type="radio"
              className="radio input-checkbox label-text-primary"
              onChange={(e) =>
                dispatch({ type: "LOW_TO_HIGH", payload: e.target.value })
              }
              id="lowToUp"
              name="pricefilter"
              value="lowToHigh"
              checked={state.sortBy === "lowToHigh"}
            />
            <label htmlFor="lowToUp" className="label-text">
              Price Low to High
            </label>
          </div>
          <div className="flex flex-wrap flex-align-item-center gap-1">
            <input
              type="radio"
              className="radio input-checkbox label-text-primary"
              onChange={(e) =>
                dispatch({ type: "HIGH_TO_LOW", payload: e.target.value })
              }
              id="upToLow"
              name="pricefilter"
              value="highToLow"
              checked={state.sortBy === "highToLow"}
            />
            <label htmlFor="upToLow" className="label-text">
              Price High to Low
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
