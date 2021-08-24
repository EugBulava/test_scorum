import React from "react";
import { MoneyControl } from "../MoneyControl";
import { Game } from "../Game/Game";

export const Home: React.FC = () => {
  return (
    <>
      <MoneyControl />
      <Game />
    </>
  );
};
