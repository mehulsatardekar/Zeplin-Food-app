import { useCart } from "../../../contexts";

const Header = () => {
  const {
    cartState: { cartItems },
  } = useCart();
  return (
    <p className="pb-1 flex flex-align-item-center gap-1">
      <span className="font-bold font-sm ">Order Summary</span>
      <span className="col-gray">({cartItems.length} dishes.)</span>
    </p>
  );
};

export { Header };
