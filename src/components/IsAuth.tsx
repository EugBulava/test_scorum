import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../store/store";

interface IsAuthProps {
  children: React.ReactNode;
}

export const IsAuth = ({ children }: IsAuthProps): JSX.Element => {
  const { logged } = useStore();
  const history = useHistory();

  useEffect(() => {
    !logged && history.push("/login");
  }, [history, logged]);

  return logged ? <>{children}</> : <div>Auth required</div>;
};
