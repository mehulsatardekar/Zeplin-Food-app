import "./RestaurantDishes.css";
import { useEffect, useContext } from "react";

import { RestaurantHomeContext } from "../../../../contexts/Restaurant-Home/RestaurantHomeContext";
import { FilterContext } from "../../../../contexts/Filters/FiltersContext";

import { CartContext } from "../../../../contexts/Cart/CartContext";

const RestaurantDishes = () => {
  const { restroDishes, fetchData } = useContext(RestaurantHomeContext);

  const {
    state: { selectType, dishTypes, sortBy, filterVal },
  } = useContext(FilterContext);

  const { cartState, cartDispatch } = useContext(CartContext);

  let filterData = [];

  if (restroDishes.restaurantItems) {
    filterData = [...restroDishes.restaurantItems];
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 100);
  }, []);

  let foodType, dishType, sortyByFood, sortByRange;
  const composer = (dataArray) => {
    return (selectType) => {
      if (!selectType) {
        foodType = dataArray;
      } else {
        foodType = dataArray.filter((es) => es.category === selectType);
      }

      return (dishTypes) => {
        if (!dishTypes.length) {
          dishType = foodType;
        } else {
          dishType = foodType.filter((e) => dishTypes.includes(e.type));
        }

        return (sortBy) => {
          if (!sortBy) {
            sortyByFood = dishType;
          } else {
            sortyByFood = dishType.sort((first, sec) =>
              sortBy === "highToLow"
                ? sec?.price - first?.price
                : first?.price - sec?.price
            );
          }

          return (filterVal) => {
            if (!filterVal) {
              sortByRange = sortyByFood;
            } else {
              sortByRange = sortyByFood.filter((e) => filterVal <= e.price);
            }

            return sortByRange;
          };
        };
      };
    };
  };

  return (
    <>
      {filterData &&
        composer(filterData)(selectType)(dishTypes)(sortBy)(filterVal).map(
          (e) => {
            return (
              <div
                className="ui-card-list card-py gap shadow-sm mb-1"
                key={e.id}
              >
                <div className="ui-card-list-img relative">
                  <img src={e.imgurl} alt={e.name} loading="lazy" />
                  <div className="card-list-badge">
                    <span>Pro- Get 20% off</span>
                  </div>
                </div>
                <div className="ui-card-list-content">
                  <span className="font-bold ">{e.name} </span>
                  <div>
                    <span>&#x20b9;</span>
                    <span className="font-md-light">{e.price}</span>
                  </div>
                  <span className="font-md-light">{e.desc}</span>
                </div>
                <div className="ui-card-list-button flex flex-column gap">
                  {cartState.cartItems.some((es) => es.id === e.id) ? (
                    <button
                      className="btn-outline-primary btn btn-py-1 flex  ui-card-small-override-prop"
                      onClick={() => {
                        cartDispatch({ type: "REMOVE_FROM_CART", payload: e });
                      }}
                    >
                      <span className="icon-default-pl">Remove</span>
                    </button>
                  ) : (
                    <button
                      className="btn-outline-primary btn btn-py-1 flex  ui-card-small-override-prop"
                      onClick={() => {
                        cartDispatch({ type: "ADD_TO_CART", payload: e });
                      }}
                    >
                      <span className="icon-default-pl">Add To Cart</span>
                      <span className="material-icons icon-sm">add</span>
                    </button>
                  )}

                  {cartState.wishlistItems.some((es) => es.id === e.id) ? (
                    <button
                      className="btn-outline-primary btn btn-py-1 flex  ui-card-small-override-prop"
                      onClick={() => {
                        cartDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: e,
                        });
                      }}
                    >
                      <span className="icon-default-pl">
                        Remove from Wishlist
                      </span>
                    </button>
                  ) : (
                    <button
                      className="btn-outline-primary btn btn-py-1 flex  ui-card-small-override-prop"
                      onClick={() => {
                        cartDispatch({ type: "ADD_TO_WISHLIST", payload: e });
                      }}
                    >
                      <span className="icon-default-pl">Add To Wishlist</span>
                      <span className="material-icons icon-sm">add</span>
                    </button>
                  )}
                </div>
              </div>
            );
          }
        )}
    </>
  );
};

export default RestaurantDishes;
