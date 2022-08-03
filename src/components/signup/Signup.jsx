import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast, useAuth } from "../../contexts";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signupValidationSchema } from "../../utils";
import { supabase } from "../../supabaseClient";

const Signup = () => {
  const { notifySuccess, notifyError } = useToast();
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signupFormValidate = async (values) => {
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      console.log(user);
      if (error) throw error;
      notifySuccess("Account created successfully");
      navigate("/", { replace: true });
      try {
        const timestamp = new Date().toLocaleString();
        const { data, error } = await supabase.from("users_credentials").insert(
          [
            {
              id: user?.id,
              email: values.email,
              username: values.username,
              last_sign_in: timestamp,
            },
          ],
          { returning: "minimal" }
        );
        if (error) throw error;

        // init user achievement table in DB
      } catch (error) {
        if (error.code === "23505") {
          notifyError("user already exists");
        }
        notifyError(error.message);
        console.error(error.message);
      }

      /* user insertion table  */
    } catch (error) {
      notifyError(error.message);
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="banner"></div>
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidationSchema}
          onSubmit={signupFormValidate}
        >
          <Form className="login-form">
            <div className="flex flex-column gap ui-card-default py-1 card-my-1 pb-2 bg-form">
              <div className="flex flex-align-item-center flex-justify-center pb-2">
                <h4 className="font-sm label-text-primary">Signup</h4>
              </div>
              <div className="flex flex-column gap-1">
                <label
                  htmlFor="emailInput1"
                  className="label-text label-text-primary"
                >
                  UserName
                </label>
                <Field
                  type="text"
                  className="input"
                  placeholder="Username"
                  id="username"
                  aria-describedby="username"
                  name="username"
                />
                <ErrorMessage name="username">
                  {(errorMsg) => (
                    <div className="font-bold font-ex-sm label-text-danger">
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="flex flex-column gap-1">
                <label
                  htmlFor="email"
                  className="label-text label-text-primary"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  className="input"
                  placeholder="Email Address"
                  id="email-address"
                  aria-describedby="email-address"
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
                  htmlFor="Password"
                  className="label-text label-text-primary"
                >
                  Password
                </label>
                <Field
                  type="password"
                  className="input"
                  placeholder="Password"
                  id="Password"
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

              <div className="flex flex-column gap-1 relative">
                <label
                  htmlFor="confirmPassword"
                  className="label-text label-text-primary"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  className="input"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <ErrorMessage name="confirmPassword">
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
                <span className="font-size-sm"> Create Zeplin Account </span>
              </button>

              <Link
                to="/"
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

export { Signup };
