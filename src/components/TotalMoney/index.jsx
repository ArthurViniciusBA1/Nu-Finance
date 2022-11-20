import "./style.css";
import { SpanSaldo } from "./Saldo";

export const TotalMoney = ({ transacoes }) => {
  let saldo = transacoes.reduce((total, transacao) => {
    switch (transacao.type) {
      case "Saida":
        return total - transacao.value;
      default:
        return total + transacao.value;
    }
  }, 0);

  return (
    <div className="totalMoney">
      <div>
        Valor total: <SpanSaldo saldo={saldo} />
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
