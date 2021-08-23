import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { routes } from "./routes/routes";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {routes.map((el) => (
            <Route key={el.id} exact path={el.path}>
              {el.pageComponent}
            </Route>
          ))}
        </Switch>
      </Router>
    </>
  );
};
