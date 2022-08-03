import { useEffect, useState } from "react";
import { useCart } from "../../../contexts";
import "./PaymentModes.css";
const PaymentModes = () => {
  const {
    cartState: { cartItems },
  } = useCart();

  console.log();
  const [isPaymentAcceptable, setisPaymentAcceptable] = useState(
    cartItems.length === 0 ? true : false
  );

  useEffect(() => {
    if (cartItems.length === 0) {
      setisPaymentAcceptable(true);
    } else {
      setisPaymentAcceptable(false);
    }
  }, [cartItems]);

  return (
    <section className="menu-section mb-1 mt-1">
      <figure className="ui-card-default py-1 width-full payment-bg">
        <blockquote className="flex flex-column flex-wrap gap pb-2">
          <p className="font-bold ">Proceed To Payment.</p>
        </blockquote>

        <div className="flex flex-column gap">
          <button
            className={`btn-primary btn btn-py-1 flex flex-justify-center flex-align-item-center width-full gap-1 ${
              isPaymentAcceptable && "payment-btn-disabled"
            }`}
            disabled={isPaymentAcceptable}
          >
            <span className="icon-pad-left">Pay Online</span>
            <span className="material-icons icon-sm">payments</span>
          </button>
          <button
            className={`btn btn-py-1 flex flex-justify-center flex-align-item-center width-full gap-1 btn-payments `}
            disabled={isPaymentAcceptable}
          >
            <span className="icon-pad-left">Pay Cash on delivery</span>
          </button>
        </div>
      </figure>
    </section>
  );
};

export { PaymentModes };
