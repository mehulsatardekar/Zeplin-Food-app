import React from "react";
import { Login } from "../../components";
import { Toaster } from "react-hot-toast";

const SigninPage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Login />
    </>
  );
};

export { SigninPage };
