import { useAuth } from "../context/Auth";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();

  return (
    <Route
      {...rest}
      render={() =>
        auth !== null ? <Component {...rest} /> : <Redirect to="/sign-in" />
      }
    />
  );
};
