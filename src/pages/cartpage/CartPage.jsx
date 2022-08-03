import React from "react";
import {
  UserProfile,
  Address,
  DishItem,
  Header,
  Payment,
} from "../../components";
import "./Cartpage.css";
import { Toaster } from "react-hot-toast";

const CartPage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main className="mb-3">
        <section className="hotel-lists gap pt-1">
          <div className="menu-lists">
            <h1>Checkout</h1>
            <UserProfile />
            <Address />

            <div className="ui-card-default py">
              <Header />
              <DishItem />
            </div>
          </div>
          <div className="filters shadow-md mt-1">
            <Payment />
          </div>
        </section>
      </main>
    </>
  );
};

export { CartPage };
