import { useState } from "react";
import { FilterButton } from "./FilterButton";
import { FinancialListCard } from "./FinancialListCard";
import noCard from '../../assets/NoCard.svg'

import "./style.css";

export const FinancialList = ({
  transactionsList,
  setFilter,
  removeTransaction,
}) => {
  const filterCategories = ["Todos", "Saida", "Entrada"];
  const [highlighted, setHighlighted] = useState(0);

  function hasTransactions() {
    if (transactionsList.length === 0) {
      return (
        <div className="noCard">
          <h2>Você não possui nenhuma transação</h2>
          <img src={noCard} alt=""/>
        </div>
      )
    }
    return transactionsList.map((transaction, index) => (
      <FinancialListCard
        key={index}
        transaction={transaction}
        removeTransaction={removeTransaction}
        id={transaction.id}
      />
    ));
  }

  return (
    <div className="financialList">
      <header>
        <h2>Resumo financeiro</h2>
        <div>
          {filterCategories.map((category, index) => (
            <FilterButton
              key={index}
              value={category}
              setFilter={setFilter}
              id={index}
              highlighted={highlighted}
              setHighlighted={setHighlighted}
            />
          ))}
        </div>
      </header>

      <ul>
        {hasTransactions()}
      </ul>
    </div>
  );
};
