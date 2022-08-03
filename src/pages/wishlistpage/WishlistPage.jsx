import React from "react";
import { WishListHome } from "../../components";
import { Toaster } from "react-hot-toast";

const WishlistPage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <WishListHome />
    </>
  );
};

export { WishlistPage };
