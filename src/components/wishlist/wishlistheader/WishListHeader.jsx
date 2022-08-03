import "./WishListHeader.css";
const WishListHeader = ({ WishlistItemQty }) => {
  return (
    <section className="flex flex-wrap flex-row flex-align-item-center flex-justify-center wishlist-container pt-2">
      <p className="font-bold">Wishlist ({WishlistItemQty} dishes)</p>
    </section>
  );
};

export { WishListHeader };
