import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useToast, useAuth } from "../../contexts";
import { supabase } from "../../supabaseClient";
import "./Login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { loginValidationSchema } from "../../utils";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { notifySuccess, notifyError } = useToast();
  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const loginFormData = async (values) => {
    console.log(values);
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email: values.email,
        password: values.password,
      });
      if (user) {
        notifySuccess("You are successfully loged in.");

        if (session !== null) {
          setCurrentUser(session);
        }
        if (location.state) {
          navigate(location?.state?.from?.pathname, { replace: true });
        } else {
          navigate("/");
        }
      }
      if (error) throw error;
    } catch (error) {
      console.log(error);
      notifyError(error.message);
    }
  };

  const guestLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email: "alex96@gmail.com",
        password: "alexSCOTT1!",
      });
      if (user) {
        notifySuccess("You are successfully loged in.");

        if (session !== null) {
          setCurrentUser(session);
        }
        if (location.state) {
          console.log("huree");

          navigate(location?.state?.from?.pathname, { replace: true });
        } else {
          navigate("/");
        }
      }
      if (error) throw error;
    } catch (error) {
      notifyError(error.message);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="login-container">
        <div className="banner"></div>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={loginFormData}
        >
          <Form className="login-form">
            <div className="flex flex-column gap ui-card-default py-1 card-my-1 pb-2 bg-form">
              <div className="flex flex-align-item-center flex-justify-center pb-2 pt-2">
                <h4 className="font-sm label-text-primary">
                  Welcome To Zeplin
                </h4>
              </div>
              <div className="flex flex-align-item-center flex-justify-center pb-2">
                <h4 className="font-sm label-text-primary">Login</h4>
              </div>
              <div className="flex flex-column gap-1">
                <label
                  htmlFor="emailInput1"
                  className="label-text label-text-primary"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  className="input"
                  placeholder="Email"
                  id="emailInput1"
                  aria-describedby="emailHelp"
                  name="email"
                />
                <span className="font-md-light">
                  We'll never share your email with anyone else.
                </span>
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <div className="font-bold font-ex-sm label-text-danger">
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="flex flex-column gap-1 relative">
                <label
                  htmlFor="passwordInput2"
                  className="label-text label-text-primary"
                >
                  Password
                </label>
                <Field
                  type="password"
                  className="input"
                  placeholder="Password"
                  id="passwordInput2"
                  name="password"
                />
                <ErrorMessage name="password">
                  {(errorMsg) => (
                    <div className="font-bold font-ex-sm label-text-danger">
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <button
                type="submit"
                className="btn-outline-primary btn btn-py-1 flex flex-justify-center"
              >
                <span className="font-size-sm"> Login To Zeplin </span>
              </button>
              <button
                onClick={guestLogin}
                className="btn-primary btn btn-py-1 flex flex-justify-center"
              >
                <span className="font-size-sm"> Login as Guest </span>
              </button>
              <Link
                to="/signup"
                className="label-text label-text-primary flex flex-justify-center"
              >
                Don't have an account? sign up
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export { Login };
