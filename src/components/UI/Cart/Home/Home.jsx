import UserProfile from "../UserProfile/UserProfile";
import Address from "../Address/Address";
import OrderSummaryHeader from "../OrderSummary/Header/Header";
import DishItem from "../OrderSummary/DisheItems/DishItem";
import PaymentHome from "../Payment/Home/Home";
import Navbar from "../../Navbar/Navbar";
import "../../css/root.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="mb-3">
        <section className="hotel-lists gap pt-1">
          <div className="menu-lists">
            <h1>Checkout</h1>
            <UserProfile />
            <Address />

            <div className="ui-card-default py">
              <OrderSummaryHeader />
              <DishItem />
            </div>
          </div>
          <div className="filters shadow-md mt-1">
            <PaymentHome />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
