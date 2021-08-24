import React from "react";
import { Route, Switch } from "react-router-dom";
import { RedirectComponent } from "../components/PageComponents/RedirectComponent";
import { LOGIN_PATH } from "../consts/consts";

import { publicRoutes } from "../routes/routes";

export const PublicLayout: React.FC = () => {
  return (
    <Switch>
      {publicRoutes.map((el) => (
        <Route key={el.id} exact path={el.path}>
          {el.pageComponent}
        </Route>
      ))}
      <Route>
        <RedirectComponent path={LOGIN_PATH} />
      </Route>
    </Switch>
  );
};
