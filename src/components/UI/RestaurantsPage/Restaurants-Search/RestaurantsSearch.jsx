import "./RestaurantsSearch.css";

const  RestaurantsSearch = ({ title, description })=> {
  return (
    <section className="food-search-container">
      <div className="flex flex-justify-center flex-align-item-center flex-column font-white pt-3">
        <p className="font-bold banner-head-txt pb-1">{title}</p>
        <span className="food-banner-text">{description}</span>
        <input
          type="text"
          className="input input-w mt-1"
          placeholder="Search for restaurants..."
          aria-describedby="restaurantssearchbar"
        />
      </div>
    </section>
  );
}

export default RestaurantsSearch;
