import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const authContext = createContext();

const AuthData = ({ children }) => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    username: "",
    email: "",
    isAuth: false,
  });
  const authChecker = async (userData) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const responseData = await JSON.parse(response._bodyText);

      if (response.status === 200) {
        localStorage.setItem("userToken", responseData.encodedToken);

        setAuth({
          username: `${responseData.foundUser.firstName} ${responseData.foundUser.lastName}`,
          email: responseData.foundUser.email,
          isAuth: true,
        });
        navigate("/");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider
      value={{ authChecker, error, setError, auth, setAuth }}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthData };
