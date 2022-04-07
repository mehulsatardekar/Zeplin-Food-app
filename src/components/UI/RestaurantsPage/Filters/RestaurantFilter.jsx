import { useState } from "react";
import "./RestaurantFilter.css";
const RestaurantFilter = () => {
  const [modalStatus, setModalStatus] = useState(true);
  const modalHandler = () => {
    setModalStatus(false);
  };

  const modalCloseHandler = () => {
    setModalStatus(true);
  };

  /* Functnality to be implemented  */
  return (
    <div className="flex flex-justify-end mt-1 flex-align-item-center gap-1">
      <span className="label-text label-text-primary">Filter</span>
      <button className="btn-outline-primary btn" onClick={modalHandler}>
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
                Cuisins
              </label>
              <div className="tabs-content flex">
                <div className="flex flex-row gap-1 flex-align-item-center">
                  <input
                    type="checkbox"
                    className="input-checkbox label-text-primary"
                    id="Mughlai"
                  />
                  <label htmlFor="Mughlai" className="label-text">
                    Mughlai
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
                Sort By Ratings
              </label>
              <div className="tabs-content flex flex-wrap">
                <div className="flex flex-wrap flex-align-item-center gap-1">
                  <input
                    type="radio"
                    className="radio input-checkbox label-text-primary"
                    id="lowToUp"
                    name="pricefilter"
                  />
                  <label htmlFor="lowToUp" className="label-text">
                    Price Low to High
                  </label>
                </div>
                <div className="flex flex-wrap flex-align-item-center gap-1">
                  <input
                    type="radio"
                    className="radio input-checkbox label-text-primary"
                    id="UpToLow"
                    name="pricefilter"
                  />
                  <label htmlFor="UpToLow" className="label-text">
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
                Sort by price
              </label>
              <div className="tabs-content">
                <div className="flex flex-column gap-1 mb-1">
                  <input
                    type="range"
                    className="slider slider-primary"
                    id="rangeSlider"
                    aria-describedby="range-slider"
                    min="0"
                    max="100"
                  />
                  <label
                    htmlFor="rangeSlider"
                    id="rangeSliderText"
                    className="label-text label-text-primary"
                  >
                    100
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  pt-1 pb-1 flex-justify-end">
            <button className="btn-primary btn btn-sm ">Apply filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFilter;
