import "./Restaurant-skeleton-loader.css";
import { v4 as uuidv4 } from "uuid";

const SkeletonCard = ({ lengthOfCard }) => {
  return lengthOfCard.map((e) => {
    return (
      <div
        className="ui-card-basic card-py ui-card-width-300  card-mt-1 "
        key={uuidv4()}
      >
        <div className="flex relative">
          <div className="skeleton-img skeleton-animate"></div>
          <div className="card-badge">
            <span></span>
          </div>
        </div>
        <div className="flex flex-column pl-04 pt-1">
          <span className="font-bold pb-09 w-100 skeleton-text skeleton-animate"></span>
          <span className="font-md-light pb-02 w-100 skeleton-desc mt-1 skeleton-animate"></span>
        </div>
        <div className="ui-card-dec flex flex-between pl-04">
          <div className="rating-section mt-09 ">
            <div className="flex flex-align-item-center pl-010 pr-010 pt-01 pb-01 skeleton-icon skeleton-animate "></div>
          </div>
          <div className="mt-09">
            <span className="font-md-light skeleton-hotel-price skeleton-animate"></span>
          </div>
        </div>
        <div className="ui-card-discount flex flex-justify-center pt-3px mt-1 ">
          <div className=" btn btn-sm width-full skeleton-btn skeleton-animate"></div>
        </div>
      </div>
    );
  });
};

export { SkeletonCard };
