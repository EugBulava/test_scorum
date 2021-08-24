import React from "react";

interface IDepositFormProps {
  value: number;
  onChange: (event: React.SyntheticEvent) => void;
  handleSubmit: (event: React.SyntheticEvent) => void;
}

export const DepositForm: React.FC<IDepositFormProps> = ({
  value,
  onChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Deposit money</h2>
      <input
        className="deposit-input"
        type="number"
        min={1}
        max={250}
        value={value}
        onChange={onChange}
      />
      <button type="submit">Deposit</button>
    </form>
  );
};
