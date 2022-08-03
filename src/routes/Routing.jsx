import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Navbar, NotFound } from "../components";
import {
  SignupPage,
  SigninPage,
  HomePage,
  RestaurantsPage,
  RestaurantHomePage,
  CartPage,
  WishlistPage,
} from "../pages/index";
const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route
          path="/restauranthome/:prodid"
          element={<RestaurantHomePage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </>
  );
};

export { Routing };
