import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { validUsersData } from "../../consts/globalConsts";
import { useStore } from "../../store/store";
import { CustomInput } from "../CustomInput";

export const LoginForm: React.FC = () => {
  const { setLogged } = useStore();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [warningActive, setWarningActive] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      setWarningActive(false);
      setLoading(true);
      e.preventDefault();
      setTimeout(() => {
        if (
          validUsersData.findIndex(
            (user) =>
              user.login === loginData.username &&
              user.password === loginData.password
          ) !== -1
        ) {
          setLogged(true);
          history.push("/");
        } else {
          setWarningActive(true);
        }
        setLoading(false);
      }, 2000);
    },
    [loginData, history, setLogged]
  );

  return (
    <div className="container container_login">
      <h1 className="h1">Sign in to your account</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <CustomInput
            value={loginData.username}
            type="text"
            placeholder="Email address"
            borderRadius="top"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLoginData((prev) => ({
                ...prev,
                username: event.target.value,
              }))
            }
          />
          <CustomInput
            value={loginData.password}
            type="password"
            placeholder="Password"
            borderRadius="bottom"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLoginData((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
          <div
            className={`warning-message ${
              warningActive && "warning-message_active"
            }`}
          >
            Имя пользователя или пароль введены не верно
          </div>
          <button className="login-form__submit-button" type="submit">
            {loading ? <div className="lds-dual-ring"></div> : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};
