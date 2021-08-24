import React from "react";
import { Route, Switch } from "react-router-dom";
import { RedirectComponent } from "../components/PageComponents/RedirectComponent";
import { HOME_PATH } from "../consts/consts";

import { loggedRoutes } from "../routes/routes";

export const LoggedLayout: React.FC = () => {
  return (
    <Switch>
      {loggedRoutes.map((el) => (
        <Route key={el.id} exact path={el.path}>
          {el.pageComponent}
        </Route>
      ))}
      <Route>
        <RedirectComponent path={HOME_PATH} />
      </Route>
    </Switch>
  );
};
