import React from "react";

interface ICardProps {
  card: {
    image: string;
    value: string;
  };
  active: boolean;
}

export const Card: React.FC<ICardProps> = (props) => {
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
