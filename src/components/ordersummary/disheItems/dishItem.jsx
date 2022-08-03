import "./DishItem.css";
import { useCart, useToast } from "../../../contexts";
import { EmptyCart } from "./emptycart";
import { Toaster } from "react-hot-toast";

const DishItem = () => {
  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();

  const { notifySuccess, notifyError } = useToast();

  return (
    <>
      {cartItems &&
        cartItems.map((cartItem, i) => {
          return (
            <div className="ui-card-list card-py gap shadow-sm mb-1" key={i}>
              <div className="ui-card-list-img relative">
                <img src={cartItem.imgurl} alt={cartItem.name} loading="lazy" />
                <div className="card-badge">
                  <span>Pro- Get 20% off</span>
                </div>
              </div>
              <div className="ui-card-list-content">
                <span className="font-bold ">{cartItem.name} </span>
                <div>
                  <span>&#x20b9;</span>
                  <span className="font-md-light">{cartItem.price}</span>
                </div>
                <span className="font-md-light">{cartItem.desc}</span>
              </div>
              <div className="ui-card-list-button gap flex flex-column">
                <div className="flex flex-row gap">
                  <button
                    className="btn-outline-primary btn pl-04 pr-04 pt-03"
                    onClick={() => {
                      cartDispatch({
                        type: "REMOVE_QTY",
                        payload: cartItem.id,
                      });
                    }}
                  >
                    <span className="material-icons icon-menu">remove</span>
                  </button>
                  <input
                    type="number"
                    className="input input-qty rm-inpt-spinner"
                    min="1"
                    value={cartItem.qty}
                  />

                  <button
                    className="btn-outline-primary btn pl-04 pr-04 pt-03"
                    onClick={() => {
                      cartDispatch({ type: "ADD_QTY", payload: cartItem.id });
                    }}
                  >
                    <span className="material-icons icon-menu">add</span>
                  </button>
                </div>
                <button
                  className="btn-primary btn btn-py-1 flex flex-justify-center width-full "
                  onClick={() => {
                    notifySuccess("Dish Removed From Cart.");
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: cartItem,
                    });
                  }}
                >
                  <span className="icon-default-pl">Remove from cart</span>
                </button>
              </div>
            </div>
          );
        })}

      {cartItems.length === 0 && <EmptyCart />}
    </>
  );
};

export { DishItem };
