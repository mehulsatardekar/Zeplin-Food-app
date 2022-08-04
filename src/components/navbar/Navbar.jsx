import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";

import { useToast, useAuth, useCart } from "../../contexts";
import "./Navbar.css";
import { useUserDetails } from "../../Hooks";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { notifySuccess, notifyError } = useToast();
  const { userDetails, getUserDetails } = useUserDetails();
  const { cartState } = useCart();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      getUserDetails();
    }
  }, [currentUser]);

  const signoutUser = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/login");
      notifySuccess("you have been  successfully logout");
    } catch (error) {
      notifyError("oops Some error occured while signing out");
      console.error(error);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

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
                <span className="label-text label-text-primary">
                  Restaurants
                </span>
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
            {currentUser ? (
              <div className="dropdown">
                <span className="dropbtn label-text label-text-primary">
                  Settings
                </span>
                <div className="dropdown-content flex flex-column gap ">
                  <span className="py pt-1 dropdown-option">
                    Welcome {userDetails[0]?.username}
                  </span>
                  <span
                    className="label-text label-text-primary dropdown-option"
                    onClick={signoutUser}
                  >
                    Signout
                  </span>
                </div>
              </div>
            ) : (
              <li className="pb-1 nav-text  navbar-white-text flex flex-align-item-center gap-1">
                <span className="material-icons label-text label-text-primary">
                  login
                </span>
                <Link to="/login" className="label-text label-text-primary">
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
