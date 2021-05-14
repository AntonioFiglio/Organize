import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { Home } from "./pages/home.jsx";
import { Logout } from "./pages/logout.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { Profile } from "./pages/profile.jsx";
import { Recover } from "./pages/Recover.jsx";
import { SignIn } from "./pages/SignIn.jsx";
import { SignUp } from "./pages/signUp.jsx";
import { Terms } from "./pages/terms.jsx";
import { WorkSpace } from "./pages/workSpace.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/recover" exact component={Recover} />
      <Route path="/terms" exact component={Terms} />
      <PrivateRoute path="/profile" exact component={Profile} />
      <PrivateRoute path="/WorkSpace" exact component={WorkSpace} />
      <PrivateRoute path="/profile/logout" exact component={Logout} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
