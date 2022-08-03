import "./SearchMenuBar.css";
const DishSearchMenuBar = () => {
  return (
    <input
      type="text"
      className="input input-primary search-menu"
      placeholder="Search For Dishes"
      aria-describedby="search for menu"
      required
    />
  );
};

export { DishSearchMenuBar };
