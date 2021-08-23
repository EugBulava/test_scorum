import React from "react";
import { IsAuth } from "../IsAuth";

export const Home: React.FC = () => {
  return (
    <IsAuth>
      <div>HOME123</div>
    </IsAuth>
  );
};
