import "./UserProfile.css";
import { useEffect } from "react";
import { useUserDetails } from "../../Hooks";
import { useAuth } from "../../contexts";
const UserProfile = () => {
  const { userDetails, getUserDetails } = useUserDetails();

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      getUserDetails();
    }
  }, [currentUser]);

  return (
    <>
      {userDetails[0]?.username && (
        <div className="menu-section mb-1 mt-1">
          <figure className="ui-card-default py-1 width-full">
            <blockquote className="flex flex-wrap gap pb-1">
              <p className="font-bold font-sm ">
                {userDetails[0]?.username?.toUpperCase()}
              </p>
              <span className="col-gray">({userDetails[0]?.email})</span>
            </blockquote>
            <figcaption className="blockquote-footer font-mid-light">
              <cite title="Source Title " className="col-gray">
                You are securely logged in
              </cite>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export { UserProfile };
