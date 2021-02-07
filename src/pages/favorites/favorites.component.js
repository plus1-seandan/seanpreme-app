import { Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { isAuthenticated } from "../../utils/auth";
import "./favorites.styles.scss";

const FavoritesPage = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const asyncFunc = async () => {
      const _isAuth = await isAuthenticated();

      setIsAuth(_isAuth);
    };
    asyncFunc();
  }, []);

  if (isAuth === null) {
    return <div>...loading</div>;
  }
  return (
    <div className="favorites-page">
      <h1>MY FAVORITES</h1>
      {isAuth ? (
        <div className="favorites-main">My Favorites</div>
      ) : (
        <div className="please-login">
          <p>
            Please{" "}
            <Link color="tomato" href="/sign-in">
              {" "}
              Log In{" "}
            </Link>
            or
            <Link color="tomato" href="/sign-in">
              {" "}
              Create an Account{" "}
            </Link>
            to see or share your favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
