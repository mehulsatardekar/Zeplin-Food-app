import {  Routes, Route , Navigate} from "react-router-dom";
import Mockman from "mockman-js";
import Home from "../UI/HomePage/Home/Home";
import Restaurants from "../UI/RestaurantsPage/Restaurants/Restaurants";
import RestaurantHome from "../UI/RestaurantsHome/RestaurantHome/RestaurantHome";
import WishList from "../UI/WishList/WishListHome/WishListHome";
import Cart from "../UI/Cart/Home/Home";
import Login from "../UI/Login/Login";
import NotFound from "../UI/NotFound/NotFound" 
import { CartData } from "../../contexts/Cart/CartContext";
import { authContext  } from "../../contexts/AuthContext/AuthContext";

import { useContext } from "react";
const Routings = () => {

  const {auth:{isAuth}} = useContext(authContext);

  return (
    <CartData>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/login" element={ !isAuth ? <Login/> : <Navigate to= "/"/> }/>
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restauranthome/:prodid" element={<RestaurantHome />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mockman" element={<Mockman />} />
           <Route path="*" element={<NotFound/>}/> 
        </Routes>
    </CartData>
  );
};

export default Routings;
