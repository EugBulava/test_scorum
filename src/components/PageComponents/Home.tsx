import React from "react";
import { MoneyControl } from "../Forms/MoneyControl";
import { Game } from "../Game/Game";

export const Home: React.FC = () => {
  return (
    <>
      <MoneyControl />
      <Game />
    </>
  );
};
