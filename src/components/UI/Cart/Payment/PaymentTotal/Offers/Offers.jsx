import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <section class="flex flex-between flex flex-align-item-center mb-2">
      <span class="font-md-light">Select Promo codes</span>
      <Link
        to="/cart"
        class="label-text label-text-primary text-deocration-none flex flex-align-item-center gap-1"
      >
        <span>
          <box-icon name="offer" type="solid" color="#4f46e5"></box-icon>
        </span>
        <span>View Offers</span>
      </Link>
    </section>
  );
};

export default Offers;
