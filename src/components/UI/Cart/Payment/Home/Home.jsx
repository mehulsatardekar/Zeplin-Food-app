import Offers from "../PaymentTotal/Offers/Offers";
import Amounts from "../PaymentTotal/Amounts/Amounts";
import PaymentModes from "../PaymentModes/PaymentModes";
import "./Home.css";
const Home = () => {
  return (
    <section class="flex flex-column py">
      <div class="pb-1">
        <h4>Confirm Payment</h4>
      </div>
      <div className="bg-gray py">
        <Offers />
        <div class="divider mt-1"></div>
        <Amounts />
      </div>
      <div class="flex  flex flex-align-item-center mt-1">
        <span class="font-md-light label-text-danger">
          Orders once placed cannot be cancelled and are non-refundable.
        </span>
      </div>
      <PaymentModes />
    </section>
  );
};

export default Home;
