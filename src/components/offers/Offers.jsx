import "./Offers.css";

import { Link } from "react-router-dom";
import { useRef } from "react";

import OfferData from "../../Data/Offers-data.json";

/* utils*/
import { cardScroller } from "../../utils";

const Offers = () => {
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
    <section className="discount-container">
      <ul className="cards-slider" ref={cardSlider}>
        {OfferData.map((offer) => {
          return (
            <Link to="/" key={offer.id}>
              <li>
                <img
                  className="img-dis-banner"
                  src={offer.imgUrl}
                  alt={offer.alt}
                  loading="lazy"
                />
              </li>
            </Link>
          );
        })}
      </ul>
      <button
        className="btn btn-round-50 left"
        aria-describedby="LeftClick"
        onClick={(e) => scrollHandler(e.target.innerText)}
      >
        <span className="material-icons">west</span>
      </button>
      <button
        className=" btn btn-round-50 right"
        aria-describedby="RightClick"
        onClick={(e) => scrollHandler(e.target.innerText)}
      >
        <span className="material-icons">east </span>
      </button>
    </section>
  );
};

export { Offers };
