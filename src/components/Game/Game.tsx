import React from "react";

export const Game: React.FC = () => {
  return (
    <div className="game-wrapper">
      <div className="card">
        <div className="front"></div>
        <div className="back"></div>
      </div>
      <button className="button-play">Play</button>
      <div className="card">
        <div className="front"></div>
        <div className="back"></div>
      </div>
    </div>
  );
};
