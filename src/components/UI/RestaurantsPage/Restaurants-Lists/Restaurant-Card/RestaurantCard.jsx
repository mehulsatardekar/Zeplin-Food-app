import { Link } from "react-router-dom";
import { useEffect,  useContext } from "react";
import SkeletonCard from "./Skeleton-Cards/Skeleton-Card";

import { RestroHome } from "../../../../../contexts/Restaurants/RestaurantsContext";
const RestaurantCard = () => {
  const { restaurants, productFetch, setRestaurants } = useContext(RestroHome);

  useEffect(() => {
    setTimeout(() => {
      productFetch();
    }, 2000);
  }, [setRestaurants]);

  return (
    <>
      {restaurants &&
        restaurants.map((reataurant) => {
          return (
            <div
              className="ui-card-basic card-py ui-card-width-300  card-mt-1 shadow-sm card-border flex flex-between flex-column"
              key={reataurant._id}
            >
              <div className="flex relative">
                <img
                  src={reataurant.imgurl}
                  alt={reataurant.hotelName}
                  loading="lazy"
                  className="ui-card-img img-restros"
                />
                <div className="card-badge">
                  <span>{reataurant.discount}</span>
                </div>
              </div>
              <div className="flex flex-column pl-04 pt-1">
                <span className="font-bold pb-09 w-100">{reataurant.hotelName}</span>
                <span className="font-md-light pb-02 w-100">
                  {reataurant.hotelTypes}
                </span>
              </div>
              <div className="ui-card-dec flex flex-between pl-04">
                <div className="rating-section mt-09 ">
                  <div className="rating-icon flex flex-align-item-center pl-010 pr-010 pt-01 pb-01">
                    <span className="material-icons icon-sm star-yellow">
                      star
                    </span>
                    <span className="card-rating-padding ">
                      {reataurant.hotelRating}
                    </span>
                  </div>
                </div>
                <div className="mt-09">
                  <span className="font-md-light">{reataurant.hotelPrice}</span>
                </div>
              </div>
              <div className="ui-card-discount flex flex-justify-center pt-3px mt-1 ">
                <Link
                  to={`/restauranthome/${reataurant._id}`}
                  className="btn-primary btn btn-sm width-full"
                >
                  Check Hotel
                </Link>
              </div>
            </div>
          );
        })}

      {!restaurants && <SkeletonCard lengthOfCard={[1, 2, 3, 4, 5, 6]} />}
    </>
  );
};

export default RestaurantCard;
