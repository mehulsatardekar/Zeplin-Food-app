import "./TopBrands.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

import Title from "../Title/Title";

/* Data */

import TopBrandsData from "../../../../Data/TopBrands-data.json";

/*Utils */
import { cardScroller } from "../../../index";

const TopBrands = () => {
  const cardSlider = useRef(null);

  const scrollHandler = (action) => {
    if (action === "east") {
      const leftScroll = cardSlider.current.scrollLeft;
      cardScroller(cardSlider, leftScroll + 400);
    } else {
      const leftScroll = cardSlider.current.scrollLeft;
      cardScroller(cardSlider, leftScroll - 400);
    }
  };
  return (
    <section className="container pt-3">
      <Title title={"Top Brands For You"} url={"/restaurants"} />
      <div className="food-top-brands mt-1">
        <ul className="cards-slider" ref={cardSlider}>
          {TopBrandsData.map((brands) => {
            return (
              <Link to="/" key={brands.id}>
                <li>
                  <img
                    className="img-round shadow-sm"
                    src={brands.imgUrl}
                    alt={brands.alt}
                    loading="lazy"
                  />
                </li>
              </Link>
            );
          })}
        </ul>
        <button
          className="btn btn-round-50 left"
          onClick={(e) => scrollHandler(e.target.innerText)}
        >
          <span className="material-icons">west</span>
        </button>
        <button
          className=" btn btn-round-50 right"
          onClick={(e) => scrollHandler(e.target.innerText)}
        >
          <span className="material-icons">east </span>
        </button>
      </div>
    </section>
  );
};

export default TopBrands;
