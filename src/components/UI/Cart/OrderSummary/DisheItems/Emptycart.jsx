import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className="flex flex-justify-center flex-column flex-align-item-center gap mt-1">
      <img
        className="empty-cart-img"
        src="https://cdn.dribbble.com/users/461802/screenshots/4421003/media/e5ec819f7ae4ac0b46aa96643193d5e8.gif"
        alt="empty-cart"
      />
      <h4>You've 0 Items in your cart</h4>
      <Link to="/restaurants" className="btn-primary btn btn-sm">
        Go To Restaurants
      </Link>
    </div>
  );
};

export default EmptyCart;
