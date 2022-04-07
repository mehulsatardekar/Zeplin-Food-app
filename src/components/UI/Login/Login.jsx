import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { authContext } from "../../../contexts/AuthContext/AuthContext";
import "./Login.css";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { authChecker, error, setError } = useContext(authContext);

  const formLoginHandler = async (e) => {
    e.preventDefault();

    authChecker(userData);
  };

  const showPasswordHandler = (e) => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-container">
      <div className="banner"></div>
      <form className="login-form" onSubmit={formLoginHandler}>
        <div
          className={`alert alert-danger mt-1  flex-justify-center flex-align-item-center ${
            !error ? "hide" : "block"
          }`}
        >
          Account Credentails Didnt Matched
        </div>
        <div className="flex flex-column gap ui-card-default py-1 card-my-1 pb-2 bg-form">
          <div className="flex flex-align-item-center flex-justify-center pb-2 pt-2">
            <h4 className="font-sm label-text-primary">Welcome To Zeplin</h4>
          </div>
          <div className="flex flex-align-item-center flex-justify-center pb-2 pt-2">
            <h4 className="font-sm label-text-primary">Login</h4>
          </div>
          <div className="flex flex-column gap-1">
            <label
              htmlFor="emailInput1"
              className="label-text label-text-primary"
            >
              Email Address
            </label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              id="emailInput1"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              aria-describedby="emailHelp"
              pattern="^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$"
              required
              autoFocus
            />
            <span className="font-md-light">
              We'll never share your email with anyone else.
            </span>
          </div>

          <div className="flex flex-column gap-1 relative">
            <label
              htmlFor="passwordInput2"
              className="label-text label-text-primary"
            >
              Password
            </label>
            <input
              type={!showPassword ? "password" : "text"}
              className="input width-full"
              placeholder="Password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              id="passwordInput2"
              required
            />
            <span
              className="material-icons inp-abs"
              onClick={showPasswordHandler}
            >
              visibility
            </span>
          </div>
          <div className="flex flex-between">
            <div className="flex flex-row gap-1 flex-align-item-center">
              <input
                type="checkbox"
                className="input-checkbox label-text-primary"
                id="checkboxInput1"
              />
              <label
                htmlFor="checkboxInput1"
                className="label-text label-text-primary"
              >
                Remember me
              </label>
            </div>
            <div className="flex flex-row gap-1 flex-align-item-center">
              <Link to="/" className="label-text">
                Forgot Password
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary btn btn-py-1 flex flex-justify-center"
          >
            <span className="font-size-sm"> Login </span>
          </button>

          <Link
            to="/"
            className="label-text label-text-primary flex flex-justify-center"
          >
            Don't have an account? sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
