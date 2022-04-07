import "./UserProfile.css";
const UserProfile = () => {
  return (
    <div className="menu-section mb-1 mt-1">
      <figure className="ui-card-default py-1 width-full">
        <blockquote className="flex flex-wrap gap pb-1">
          <p className="font-bold font-sm ">Mehul Satardekar</p>
          <span className="col-gray">(mehulsatardekar@gmail.com)</span>
        </blockquote>
        <figcaption className="blockquote-footer font-mid-light">
          <cite title="Source Title " className="col-gray">
            You are securely logged in
          </cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserProfile;
