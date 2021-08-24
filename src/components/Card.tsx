import React from "react";

interface ICard {
  card: {
    code: string;
    image: string;
    images: {
      svg: string;
      png: string;
    };
    value: string;
    suit: string;
  };
  active: boolean;
}

export const Card: React.FC<ICard> = (props) => {
  return (
    <div className={`card ${props.active && "active"}`}>
      <div className="front"></div>
      <div
        className="back"
        style={props.card && { backgroundImage: `url('${props.card.image}')` }}
      ></div>
    </div>
  );
};
