import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { SignIn } from "./pages/SignIn.jsx";
import { SignUp } from "./pages/signUp.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
