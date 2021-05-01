import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { Sign } from "./pages/Sign.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign" exact component={Sign} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
