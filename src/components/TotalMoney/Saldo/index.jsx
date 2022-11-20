import "./style.css";

export const SpanSaldo = ({ saldo }) => {
  if (saldo < 0) {
    return <span className="balanceNegative">R$ {saldo}</span>;
  }

  return <span className="balancePositive">R$ {saldo}</span>;
};
