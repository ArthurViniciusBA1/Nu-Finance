import "./style.css";
import { RemoveButton } from "./RemoveButton";

export const FinancialListCard = ({ transaction, removeTransaction, id }) => {

  return (
    <li className="financialListCard"> 
      <div className={"border" + transaction.type}></div>
      <div className="cardLeft">
        <span>{transaction.description}</span>
        <span>{transaction.type}</span>
      </div>
      <div className="cardRight">
          <span>R$ {transaction.value}</span>
          <RemoveButton removeTransaction={removeTransaction} id={id}/>
      </div>
    </li>
  );
};
