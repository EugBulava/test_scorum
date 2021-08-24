import React from "react";

interface IWithdrawFormProps {
  value: number;
  onChange: (event: React.SyntheticEvent) => void;
  handleSubmit: (event: React.SyntheticEvent) => void;
}

export const WithdrawForm: React.FC<IWithdrawFormProps> = ({
  value,
  onChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Withdraw money</h2>
      <input
        className="withdraw-input"
        type="number"
        min={1}
        value={value}
        onChange={onChange}
      />
      <button type="submit">Withdraw</button>
    </form>
  );
};
