import { Link } from "react-router-dom";
import { useEffect } from "react";

import "./TopRestaurants.css";
import { Title, SkeletonCard } from "../../components";

import { useRestroHome } from "../../contexts";

const TopRestaurants = () => {
  const { restaurants, productFetch, setRestaurants } = useRestroHome();

  useEffect(() => {
    setTimeout(() => {
      productFetch();
    }, 2000);
  }, [setRestaurants]);

  return (
    <section className="container pt-3">
      <Title title={"Top Restaurants For You"} url={"/restaurants"} />
      <div className="flex top-restaurants  mt-1 flex-wrap flex-space-around">
        {restaurants &&
          restaurants?.map((restaurants, index) =>
            3 >= index ? (
              <div
                className="ui-card-basic card-bg card-py ui-card-width-300 card-mt-1  shadow-md flex flex-between flex-column"
                key={index}
              >
                <div className="flex">
                  <img
                    src={`https://images.weserv.nl/?url=${restaurants.imgurl}`}
                    alt={restaurants.hotelName}
                    className="ui-card-img img-restros"
                  />
                </div>
                <div className="flex flex-column pl-04 pt-1">
                  <span className="font-bold pb-09 w-100">
                    {restaurants.hotelName}
                  </span>
                  <span className="font-md-light pb-02  w-100">
                    {restaurants.hotelTypes}
                  </span>
                </div>
                <div className="ui-card-dec flex flex-between pl-04">
                  <div className="rating-section flex-align-item-center mt-09 ">
                    <div className="rating-icon flex pl-010 pr-010 pt-01 pb-01">
                      <span className="material-icons icon-sm star-yellow">
                        star
                      </span>
                      <span className="card-rating-padding">
                        {restaurants.hotelRating}
                      </span>
                    </div>
                  </div>
                  <div className="mt-09">
                    <span className="font-md-light">
                      {restaurants.hotelPrice}
                    </span>
                  </div>
                </div>
                <div className="ui-card-discount flex flex-justify-center pt-3px mt-1 ">
                  <Link
                    to={`/restauranthome/${restaurants._id}`}
                    className="btn-primary btn btn-sm width-full"
                  >
                    Check Hotel
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )
          )}

        {!restaurants && <SkeletonCard lengthOfCard={[1, 2, 3]} />}
      </div>
    </section>
  );
};

export { TopRestaurants };
