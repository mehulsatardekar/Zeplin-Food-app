import { useContext } from "react";
import "./DishItem.css";
import { CartContext } from "../../../../../contexts/Cart/CartContext";
import EmptyCart from "./Emptycart";
const DishItem = () => {
  const {
    cartState: { cartItems },
    cartDispatch,
  } = useContext(CartContext);

  return (
    <>
      {cartItems &&
        cartItems.map((e,i) => {
          return (
            <div className="ui-card-list card-py gap shadow-sm mb-1" key={i}>
              <div className="ui-card-list-img relative">
                <img src={e.imgurl} alt={e.name} loading="lazy" />
                <div className="card-badge">
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
              <div className="ui-card-list-button gap flex flex-column">
                <div className="flex flex-row gap">
                  <button
                    className="btn-outline-primary btn pl-04 pr-04 pt-03"
                    onClick={() => {
                      cartDispatch({ type: "REMOVE_QTY", payload: e.id });
                    }}
                  >
                    <span className="material-icons icon-menu">remove</span>
                  </button>
                  <input
                    type="number"
                    className="input input-qty rm-inpt-spinner"
                    min="1"
                    value={e.qty}
                  />

                  <button
                    className="btn-outline-primary btn pl-04 pr-04 pt-03"
                    onClick={() => {
                      cartDispatch({ type: "ADD_QTY", payload: e.id });
                    }}
                  >
                    <span className="material-icons icon-menu">add</span>
                  </button>
                </div>
                <button
                  className="btn-primary btn btn-py-1 flex flex-justify-center width-full "
                  onClick={() => {
                    cartDispatch({ type: "REMOVE_FROM_CART", payload: e });
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

export default DishItem;
