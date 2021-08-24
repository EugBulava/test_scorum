import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useStore } from "./store/store";

import { LoggedLayout } from "./layouts/LoggedLayout";
import { PublicLayout } from "./layouts/PublicLayout";
import { Header } from "./components/Header";

export const App: React.FC = () => {
  const { logged } = useStore();

  return (
    <>
      <Router>
        <Header />
        {logged ? <LoggedLayout /> : <PublicLayout />}
      </Router>
    </>
  );
};
