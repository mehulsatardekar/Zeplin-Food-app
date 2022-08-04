import { useState, useEffect } from "react";
import "./RestaurantsSearch.css";
import { useRestroHome } from "../../contexts";
import { useSearchRestaurants } from "../../Hooks";
import { Link } from "react-router-dom";
const RestaurantsSearch = ({ title, description }) => {
  const { restaurants, productFetch, setRestaurants } = useRestroHome();
  const [searchIcon, setSearchIcon] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [restaurantList, setrestaurantList] = useState([]);
  const { debounceValue } = useSearchRestaurants(searchValue);

  useEffect(() => {
    productFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRestaurants]);

  const setMenuButton = () => {
    setSearchIcon(!searchIcon);
  };

  const getRestaurantLists = (value) => {
    const filteredRestaurants = restaurants?.filter((restaurant) =>
      restaurant.hotelName.toLowerCase().includes(value.toLowerCase().trim())
    );
    setrestaurantList(filteredRestaurants);
  };

  useEffect(() => {
    if (debounceValue) {
      getRestaurantLists(debounceValue);
    } else {
      setrestaurantList([]);
    }
  }, [debounceValue]);

  return (
    <section className="food-search-container">
      <div className="flex flex-justify-center flex-align-item-center flex-column font-white ">
        <p className="font-bold banner-head-txt pb-1">{title}</p>
        <span className="food-banner-text">{description}</span>
        <div className="width-full flex flex-justify-center flex-align-item-center menulistgrp">
          <input
            type="text"
            value={searchValue}
            className="input input-w mt-1"
            placeholder="Search for restaurants..."
            aria-describedby="restaurantssearchbar"
            onClick={setMenuButton}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="menubtn" onClick={setMenuButton}>
            <span className="material-icons icon-menu ico">
              {searchIcon ? "search" : "close"}
            </span>
          </div>
        </div>
        {!searchIcon && (
          <div className="optionlist">
            {restaurantList.length > 0 ? (
              restaurantList.map((restaurant) => (
                <>
                  <Link
                    to={`/restauranthome/${restaurant._id}`}
                    className="link"
                  >
                    <div className="flex flex-row gap pt-1">
                      <div>
                        <img
                          className="img-round-full img-sm"
                          src={`${restaurant.imgurl}`}
                          loading="lazy"
                          alt={restaurant.hotelName}
                        />
                      </div>
                      <div className="flex flex-column pl-04">
                        <span className="font-bold pb-09 w-100">
                          {restaurant.hotelName}
                        </span>
                        <div className="flex gap-1">
                          <span className="font-md-light pb-02 ">
                            {restaurant.hotelTypes}
                          </span>
                          <span className="font-md-light pb-02 ">
                            {restaurant.hotelPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <hr />
                </>
              ))
            ) : (
              <div className="flex pt-2 flex-justify-center ">
                <h1>
                  {searchValue ? "Restaurants Not Found" : "Search Restaurants"}
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export { RestaurantsSearch };
