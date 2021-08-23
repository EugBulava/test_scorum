import React from "react";
import { Game } from "../components/PageComponents/Game";
import { Home } from "../components/PageComponents/Home";
import { Login } from "../components/PageComponents/Login";

export const routes = [
  {
    id: 1,
    path: "/",
    pageComponent: <Home />,
  },
  {
    id: 2,
    path: "/login",
    pageComponent: <Login />,
  },
  {
    id: 3,
    path: "/random",
    pageComponent: <Game />,
  },
];
