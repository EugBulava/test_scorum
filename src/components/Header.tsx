import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../store/store";

export const Header: React.FC = () => {
  const history = useHistory();
  const { logged, setLogged } = useStore();

  const handlePushHome = useCallback(() => {
    history.push("/");
  }, [history]);

  const handleLogout = useCallback(() => {
    setLogged(false);
  }, [setLogged]);

  return (
    <header className="header">
      <button
        className="header__game-button"
        onClick={() => {
          logged && handlePushHome();
        }}
      >
        Bridge
      </button>
      {logged && (
        <button className="header__logout-button" onClick={handleLogout}>
          Sign out
        </button>
      )}
    </header>
  );
};
