import { Link } from "react-router-dom";
const Title = ({ title, url }) => {
  return (
    <section className="flex flex-between">
      <div>
        <span className="font-bold label-text label-text-primary">{title}</span>
      </div>
      <div>
        <Link to={url}>
          <span className="label-text label-text-primary">See More</span>
        </Link>
      </div>
    </section>
  );
};

export default Title;
