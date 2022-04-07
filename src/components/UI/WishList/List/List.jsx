const List = ({ WishListItems: { wishlistItems, cartDispatch } }) => {
  return (
    <>
      {wishlistItems &&
        wishlistItems.map((list,i) => {
          return (
            <div class="ui-card-list card-py ui-card-width-900 card-mt-1 gap shadow-md" key={i}>
              <div class="ui-card-list-img">
                <img src={list.imgurl} alt={list.name} loading="lazy" />
              </div>
              <div class="ui-card-list-content card-pl  ">
                <span class="font-bold ">{list.name}</span>
                <div>
                  <span>&#x20b9;</span>
                  <span class="font-md-light">{list.price}</span>
                </div>
                <span class="font-md-light">{list.desc}</span>
              </div>
              <div class="ui-card-list-button flex flex-column gap">
                <button
                  class="btn-outline-primary btn btn-py-1 flex flex-between ui-card-small-override-prop flex-justify-center"
                  onClick={() => {
                    cartDispatch({
                      type: "REMOVE_ITEM_FROM_WISHLIST",
                      payload: list,
                    });
                  }}
                >
                  <span class="icon-default-pl">Remove</span>
                </button>
                <button
                  class="btn-outline-primary btn btn-sm flex flex-between ui-card-small-override-prop flex-justify-center"
                  onClick={() => {
                    cartDispatch({
                      type: "REMOVE_ITEM_FROM_WISHLIST",
                      payload: list,
                    });
                    cartDispatch({ type: "ADD_TO_CART", payload: list });
                  }}
                >
                  <span class="icon-default-pl">Move To Cart</span>
                </button>
              </div>
            </div>
          );
        })}

      {wishlistItems.length === 0 && (
        <img
          style={{ width: "420px" }}
          src="https://res.cloudinary.com/dwhsfh3sc/image/upload/v1649260646/Offers-imgs/empty-food_mcxqau.jpg"
          alt="empty-cart "
        />
        
      )}
    </>
  );
};
export default List;
