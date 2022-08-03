import "./Payment.css";
import { PaymentModes } from "../paymentmodes/PaymentModes";
import { Amounts } from "../paymentotal/amounts/Amounts";
import { Offers } from "../paymentotal/offers/Offers";
const Payment = () => {
  return (
    <section className="flex flex-column py">
      <div className="pb-1">
        <h4>Confirm Payment</h4>
      </div>
      <div className="bg-gray py">
        <Offers />
        <div className="divider mt-1"></div>
        <Amounts />
      </div>
      <div className="flex  flex flex-align-item-center mt-1">
        <span className="font-md-light label-text-danger">
          Orders once placed cannot be cancelled and are non-refundable.
        </span>
      </div>
      <PaymentModes />
    </section>
  );
};

export { Payment };
