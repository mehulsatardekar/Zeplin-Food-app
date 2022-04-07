import React, { useContext } from "react";
import { CartContext } from "../../../../../contexts/Cart/CartContext";

const Header = () => {
  const {
    cartState: { cartItems },
  } = useContext(CartContext);
  return (
    <p className="pb-1 flex flex-align-item-center gap-1">
      <span className="font-bold font-sm ">Order Summary</span>
      <span className="col-gray">({cartItems.length} dishes.)</span>
    </p>
  );
};

export default Header;
