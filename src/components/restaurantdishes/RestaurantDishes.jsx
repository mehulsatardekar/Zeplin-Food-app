import "./RestaurantDishes.css";
import { useEffect } from "react";

import {
  useCart,
  useFilterContext,
  useRestaurantHomeContext,
  useAuth,
  useToast,
} from "../../contexts";

const RestaurantDishes = () => {
  const { restroDishes, fetchData } = useRestaurantHomeContext();

  const {
    state: { selectType, dishTypes, sortBy, filterVal },
  } = useFilterContext();

  const { cartState, cartDispatch } = useCart();

  const { currentUser } = useAuth();

  const { notifySuccess, notifyError } = useToast();

  let filterData = [];

  if (restroDishes.restaurantItems) {
    filterData = [...restroDishes.restaurantItems];
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
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
                  <img
                    src={`https://images.weserv.nl/?url=${e.imgurl}`}
                    alt={e.name}
                    loading="lazy"
                  />
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
                        notifySuccess("Dish Removed From Cart");
                        cartDispatch({ type: "REMOVE_FROM_CART", payload: e });
                      }}
                    >
                      <span className="icon-default-pl">Remove</span>
                    </button>
                  ) : (
                    <button
                      className="btn-outline-primary btn btn-py-1 flex  ui-card-small-override-prop"
                      onClick={() => {
                        if (currentUser) {
                          notifySuccess("Dish Added To Cart");
                          cartDispatch({ type: "ADD_TO_CART", payload: e });
                        } else {
                          notifyError("You need to login first.");
                        }
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

export { RestaurantDishes };
