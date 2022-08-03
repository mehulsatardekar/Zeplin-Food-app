import { useState } from "react";

import "./MobileFilter.css";
import { useFilterContext, useRestaurantHomeContext } from "../../../contexts";

const MobileFilter = () => {
  const [modalStatus, setModalStatus] = useState(true);

  const { restroDishes } = useRestaurantHomeContext();

  const { state, dispatch } = useFilterContext();

  const modalHandler = () => {
    setModalStatus(false);
  };

  const modalCloseHandler = () => {
    setModalStatus(true);
  };

  const dishClickHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: "CHECK", payload: e.target.value });
      return;
    } else {
      dispatch({ type: "UNCHECK", payload: e.target.value });
    }
  };
  return (
    <>
      <button
        className="btn-primary btn filterbtn"
        id="showModalBtn"
        onClick={modalHandler}
      >
        <span className="material-icons icon-menu">filter_list</span>
      </button>

      <div
        className={`modal ${modalStatus ? "hide" : ""} md-effect-1`}
        id="modalExample"
      >
        <div className="modal-container card-py modal-width-80">
          <div className="flex flex-between  flex-align-item-center pt-1 pb-1">
            <h1 className="font-mid-bold card-header-text">Filter</h1>
            <span
              className="material-icons  card-close-btn flex flex-justify-center flex-align-item-center"
              id="modalCloseBtn"
              onClick={modalCloseHandler}
            >
              close
            </span>
          </div>
          <div className="card-mb-1 model-content py-1">
            <div className="tabs flex flex-wrap">
              <input
                type="radio"
                className="tabs-radio"
                name="tabs-group"
                id="tabs-group1"
              />
              <label htmlFor="tabs-group1" className="tabs-title">
                Types
              </label>
              <div className="tabs-content flex">
                {restroDishes?.types?.map((e, i) => {
                  return (
                    <div
                      className="flex flex-row gap-1 flex-align-item-center"
                      key={i}
                    >
                      <input
                        type="checkbox"
                        className="input-checkbox label-text-primary"
                        id={e}
                        onChange={dishClickHandler}
                        value={e}
                        checked={state.dishTypes.includes(e)}
                      />
                      <label htmlFor={e} className="label-text">
                        {e}
                      </label>
                    </div>
                  );
                })}
              </div>

              <input
                type="radio"
                className="tabs-radio"
                name="tabs-group"
                id="tabs-group4"
              />
              <label htmlFor="tabs-group4" className="tabs-title">
                Category
              </label>
              <div className="tabs-content flex">
                <div className="flex flex-wrap flex-align-item-center gap-1">
                  <input
                    type="radio"
                    name="categorys"
                    onChange={(e) =>
                      dispatch({ type: "SORT_ASC", payload: e.target.value })
                    }
                    className="input-checkbox label-text-primary"
                    id="mob-non-veg-chckbox"
                    value={restroDishes?.category?.[0]}
                    checked={state.selectType === restroDishes?.category?.[0]}
                  />
                  <label htmlFor="mob-non-veg-chckbox" className="label-text">
                    veg
                  </label>

                  <input
                    type="radio"
                    name="categorys"
                    onChange={(e) =>
                      dispatch({ type: "SORT_DESC", payload: e.target.value })
                    }
                    className="input-checkbox label-text-primary"
                    id="mob-veg-chckbox"
                    value={restroDishes?.category?.[1]}
                    checked={state.selectType === restroDishes?.category?.[1]}
                  />
                  <label htmlFor="mob-veg-chckbox" className="label-text">
                    nonveg
                  </label>
                </div>
              </div>
              <input
                type="radio"
                className="tabs-radio"
                name="tabs-group"
                id="tabs-group2"
              />
              <label htmlFor="tabs-group2" className="tabs-title">
                Sort by Price
              </label>
              <div className="tabs-content flex">
                <div className="flex flex-wrap flex-align-item-center gap-1">
                  <input
                    type="radio"
                    className="radio input-checkbox label-text-primary"
                    id="lowToUp-mob"
                    name="mob-pricefilter"
                    onChange={(e) =>
                      dispatch({ type: "LOW_TO_HIGH", payload: e.target.value })
                    }
                    value="lowToHigh"
                    checked={state.sortBy === "lowToHigh"}
                  />
                  <label htmlFor="lowToUp-mob" className="label-text">
                    Price Low to High
                  </label>
                </div>
                <div className="flex flex-wrap flex-align-item-center gap-1">
                  <input
                    type="radio"
                    className="radio input-checkbox label-text-primary"
                    id="upToLow-mob"
                    name="mob-pricefilter"
                    onChange={(e) =>
                      dispatch({ type: "HIGH_TO_LOW", payload: e.target.value })
                    }
                    value="highToLow"
                    checked={state.sortBy === "highToLow"}
                  />
                  <label htmlFor="upToLow-mob" className="label-text">
                    Price High to Low
                  </label>
                </div>
              </div>

              <input
                type="radio"
                className="tabs-radio"
                name="tabs-group"
                id="tabs-group3"
              />
              <label htmlFor="tabs-group3" className="tabs-title">
                Sort by Price Range
              </label>
              <div className="tabs-content flex">
                <div className="flex flex-column gap-1 mb-1">
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
            </div>
          </div>
          <div className="flex  pt-1 pb-1 flex-justify-end">
            <button
              className="btn-primary btn btn-sm "
              onClick={(e) => dispatch({ type: "CELAR_FILTER" })}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { MobileFilter };
