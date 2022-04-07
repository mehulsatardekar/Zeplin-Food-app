import { useContext } from "react";
import WishListHeader from "../WishList-Header/WishListHeader";
import List from "../List/List";
import Navbar from "../../Navbar/Navbar";

import { CartContext } from "../../../../contexts/Cart/CartContext";

const WishListHome =()=>{
  const {cartState:{wishlistItems}, cartDispatch}= useContext(CartContext);

  return(
    <>
    <Navbar/>
   <WishListHeader WishlistItemQty={wishlistItems.length}/>
   <section className="flex flex-wrap flex-row flex-align-item-center flex-justify-center wishlist-container">
   <List WishListItems={{wishlistItems ,cartDispatch }} />
   </section>
    </>
  )
}
export default WishListHome;