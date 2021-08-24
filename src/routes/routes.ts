import React from "react";
import { Home } from "../components/PageComponents/Home";
import { Login } from "../components/PageComponents/Login";

interface IRoute {
  id: number;
  path: string;
  pageComponent: React.ReactNode;
}

export const publicRoutes: IRoute[] = [
  {
    id: 1,
    path: "/login",
    pageComponent: Login,
  },
];

export const loggedRoutes: IRoute[] = [
  {
    id: 1,
    path: "/",
    pageComponent: Home,
  },
];
