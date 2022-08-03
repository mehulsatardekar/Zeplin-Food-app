import "./RestaurantDesc.css";
import { useRestaurantHomeContext } from "../../contexts";

const RestaurantDescription = () => {
  const { restroDishes } = useRestaurantHomeContext();
  return (
    <section className="discount-container flex flex-wrap  gap py qg-flex-column shadow-md">
      <div className="qg-flex-1 width-full pt-1 pb-1 flex flex-wrap">
        <img
          className="hotel-img"
          src={`https://images.weserv.nl/?url=${restroDishes.imgurl}`}
          alt={restroDishes.hotelName}
          loading="lazy"
        />
      </div>

      <div className="qg-flex-5  flex flex-column space-between gap-2 pt-1 pb-1">
        <div className="users flex flex-column gap-1 ">
          <span className="pb-01 hotel-name ">{restroDishes.hotelName}</span>
          <span className="hoteldesc">{restroDishes.hotelTypes}</span>
        </div>

        <div className="user-dashboard flex flex-wrap flex-row  gap">
          <div className="flex flex-align-item-center gap">
            <div>
              <span className="material-icons material-icons-outlined desc-iocns">
                star
              </span>
            </div>
            <div className="flex flex-column gap-1">
              <span className="font-mid-bold label-text label-text-primary txt-md">
                {restroDishes.hotelRating}
              </span>
              <span className="font-mid-light txt-sm">Ratings</span>
            </div>
          </div>

          <div className="divider"></div>
          <div className="flex flex-align-item-center gap">
            <div className="bg">
              <span className="material-icons material-icons-outlined desc-iocns">
                currency_rupee
              </span>
            </div>
            <div className="flex flex-column gap-1 ">
              <span className="font-mid-bold label-text label-text-primary txt-md">
                {restroDishes.hotelPricing}
              </span>
              <span className="font-mid-light txt-sm">For Two</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RestaurantDescription };
