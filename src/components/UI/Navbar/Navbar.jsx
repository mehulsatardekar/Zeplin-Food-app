import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { CartContext } from "../../../contexts/Cart/CartContext";
import { authContext } from "../../../contexts/AuthContext/AuthContext";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { cartState } = useContext(CartContext);

  const { auth, setAuth } = useContext(authContext);


  const logoutUser = () => {
    localStorage.removeItem("userToken");
    setAuth({ ...auth, isAuth: false });
    navigate("/login");
  };

  const loginUser = () => {
    navigate("/login");
  };

  const isLogincheck = () => {
     (auth.username) ? logoutUser() : loginUser()
    }
  

  return (
    <nav className="navbar navbar-fixed flex flex-wrap flex-between  navbar-bg nav-zindex">
      <div className="flex flex-space-evenly flex-align-item-center ">
        <ul className=" text-deocration-none flex flex-wrap flex-align-item-center gap">
          <li className="pb-1 nav-text navbar-white-text flex flex-align-item-center gap-1 hide">
            <span className="material-icons snackbar-icons  navbar-icons">
              menu
            </span>
          </li>
          <Link to="/" className="text-deocration-none list-style-none">
            <li className="pb-1  navbar-white-text flex flex-align-item-center gap-1">
              <span className="font-bold label-text label-text-primary">
                Zeplin
              </span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-space-evenly flex-align-item-center ">
        <ul className=" text-deocration-none flex flex-wrap gap-col-2">
          <Link to="/" className="text-deocration-none">
            <li className="pb-1 nav-text  navbar-white-text flex flex-align-item-center gap-1">
              <span className="material-icons label-text label-text-primary">
                home
              </span>
              <span className="label-text label-text-primary">Home</span>
            </li>
          </Link>

          <Link to="/restaurants" className="text-deocration-none">
            <li className="pb-1 nav-text  navbar-white-text flex flex-align-item-center gap-1 ">
              <span className="material-icons label-text label-text-primary">
                dinner_dining
              </span>
              <span className="label-text label-text-primary">Restaurants</span>
            </li>
          </Link>
          <Link to="/cart" className="text-deocration-none">
            <li className="pb-1 nav-text  navbar-white-text flex flex-align-item-center gap-1">
              <span className="label-text label-text-primary">Cart</span>
              <span className="label-text label-text-primary">
                {cartState.cartItems.length}
              </span>
            </li>
          </Link>
          <Link to="/wishlist" className="text-deocration-none">
            <li className="pb-1 nav-text  navbar-white-text flex flex-align-item-center gap-1 badge">
              <span className=" label-text label-text-primary">Wishlist</span>
              <span className="label-text label-text-primary">
                {cartState.wishlistItems.length}
              </span>
            </li>
          </Link>
          <span className="text-deocration-none" onClick={isLogincheck}>
            {auth.username ? (
              <li className="pb-1 nav-text  navbar-white-text flex flex-align-item-center gap-1">
                <span className="material-icons label-text label-text-primary">
                  logout
                </span>
                <span className="label-text label-text-primary">
                  {auth.username}
                </span>
              </li>
            ) : (
              <li className="pb-1 nav-text  navbar-white-text flex flex-align-item-center gap-1">
                <span className="material-icons label-text label-text-primary">
                  login
                </span>
                <span className="label-text label-text-primary">LOGIN</span>
              </li>
            )}
          </span>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
