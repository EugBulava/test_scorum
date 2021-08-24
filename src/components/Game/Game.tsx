import React, { useCallback, useEffect, useState } from "react";
import { getRandomCards } from "../../API/cardsAPI";
import { betSizes, cardValues } from "../../consts/globalConsts";
import { useStore } from "../../store/store";
import { Card } from "../Card";

type GameStatuses =
  | "init"
  | "game"
  | "loading"
  | "lose"
  | "win"
  | "draw"
  | "error";
type ChosenSide = "left" | "right";

export const Game: React.FC = () => {
  const { betSize, money, setBetSize, bet, winBet, draw } = useStore();

  const endGameStatuses = ["lose", "win", "draw"];

  const [gameStatus, setGameStatus] = useState<GameStatuses>("init");
  const [bets, setBets] = useState(betSizes);
  const [cards, setCards] = useState([]);
  const [activeCards, setActiveCards] = useState(false);

  const handleStartGame = useCallback(() => {
    setGameStatus("game");
  }, [setGameStatus]);

  const handleChangeBetSize = useCallback(
    (size) => {
      setBetSize(size);
    },
    [setBetSize]
  );

  useEffect(() => {
    setBets((prev) =>
      prev.map((el) =>
        el.size === betSize ? { ...el, active: true } : { ...el, active: false }
      )
    );
  }, [betSize]);

  const handlePlay = useCallback(
    (side: ChosenSide) => {
      if (money < betSize) {
        alert("Account has insufficient funds");
      } else {
        setGameStatus("loading");
        bet();
        getRandomCards(2)
          .then((res) => {
            setCards(res.data.cards);
            setTimeout(() => {
              setActiveCards(true);
              const temp =
                cardValues.findIndex((el) => el === res.data.cards[0].value) -
                cardValues.findIndex((el) => el === res.data.cards[1].value);
              switch (Math.sign(temp)) {
                case 0:
                  setGameStatus("draw");
                  draw();
                  break;
                case 1:
                  if (side === "left") {
                    setGameStatus("win");
                    winBet();
                  } else {
                    setGameStatus("lose");
                  }
                  break;
                case -1:
                  if (side === "left") {
                    setGameStatus("lose");
                  } else {
                    setGameStatus("win");
                    winBet();
                  }
                  break;
              }
            }, 1000);
          })
          .catch((error) => {
            setGameStatus("error");
            console.log(error);
          });
      }
    },
    [money, betSize, bet, winBet, draw]
  );

  const playAgainHandler = useCallback(() => {
    setGameStatus("game");
    setActiveCards(false);
  }, []);

  return (
    <div className="game-wrapper">
      <h1 className="game-title">Who will win?</h1>
      <h2 className="game-description">Play game and try your luck!</h2>
      {gameStatus === "lose" && <div className="result-text">You lose :(</div>}
      {gameStatus === "win" && (
        <div className="result-text">You won {betSize * 2}$</div>
      )}
      {gameStatus === "draw" && <div className="result-text">Draw</div>}
      <div className="cards-wrapper">
        <Card card={cards[0]} active={activeCards} />
        {gameStatus === "init" && (
          <button onClick={handleStartGame} className="button-play">
            Play
          </button>
        )}
        {gameStatus === "game" && (
          <div>
            <div className="bet-size-container">
              {bets.map((betSize) => (
                <button
                  key={betSize.id}
                  onClick={() => handleChangeBetSize(betSize.size)}
                  className={`bet-size ${betSize.active && "active"}`}
                >
                  {betSize.size}
                </button>
              ))}
            </div>
            <div className="game-buttons__wrapper">
              <button
                onClick={() => handlePlay("left")}
                className="choose-button"
              >
                Left
              </button>
              <button
                onClick={() => handlePlay("right")}
                className="choose-button"
              >
                Right
              </button>
            </div>
          </div>
        )}
        {gameStatus === "loading" && <div className="lds-dual-ring blue"></div>}
        {endGameStatuses.findIndex((el) => el === gameStatus) !== -1 && (
          <button className="choose-button" onClick={playAgainHandler}>
            Play again
          </button>
        )}
        {gameStatus === "error" && (
          <div style={{ color: "red" }}>SOMETHING WENT WRONG!</div>
        )}
        <Card card={cards[1]} active={activeCards} />
      </div>
    </div>
  );
};
