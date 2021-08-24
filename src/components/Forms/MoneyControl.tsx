import React, { useCallback, useState } from "react";
import { useStore } from "../../store/store";
import { DepositForm } from "./DepositForm";
import { WithdrawForm } from "./WithdrawForm";

export const MoneyControl: React.FC = () => {
  const { withdraw, deposit, money } = useStore();

  const [depositInput, setDepositInput] = useState(0);
  const [withdrawInput, setWithdrawInput] = useState(0);

  const handleChangeDepositInput = useCallback((e) => {
    setDepositInput(Number(e.target.value));
  }, []);

  const handleChangeWithdrawInput = useCallback((e) => {
    setWithdrawInput(Number(e.target.value));
  }, []);

  const handleWithdraw = useCallback(
    (e) => {
      e.preventDefault();
      withdrawInput <= money
        ? withdraw(withdrawInput)
        : alert("Account has insufficient funds");
    },
    [withdrawInput, withdraw, money]
  );

  const handleDeposit = useCallback(
    (e) => {
      e.preventDefault();
      deposit(depositInput);
    },
    [depositInput, deposit]
  );

  return (
    <div>
      <div className="money-controls__forms-container">
        <DepositForm
          onChange={handleChangeDepositInput}
          value={depositInput}
          handleSubmit={handleDeposit}
        />
        <WithdrawForm
          onChange={handleChangeWithdrawInput}
          value={withdrawInput}
          handleSubmit={handleWithdraw}
        />
      </div>
      <h1 className="balance">Balance: {money}</h1>
    </div>
  );
};
