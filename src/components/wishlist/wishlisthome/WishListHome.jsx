import { WishListHeader } from "../wishlistheader/WishListHeader";
import { List } from "../list/List";

import { useCart } from "../../../contexts";

const WishListHome = () => {
  const {
    cartState: { wishlistItems },
    cartDispatch,
  } = useCart();

  return (
    <>
      <WishListHeader WishlistItemQty={wishlistItems.length} />
      <section className="flex flex-wrap flex-row flex-align-item-center flex-justify-center wishlist-container">
        <List WishListItems={{ wishlistItems, cartDispatch }} />
      </section>
    </>
  );
};
export { WishListHome };
