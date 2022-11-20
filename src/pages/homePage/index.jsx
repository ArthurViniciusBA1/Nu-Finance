import { Header } from "../../components/Header";
import { FinancialForm } from "../../components/FinancialForm";
import { TotalMoney } from "../../components/TotalMoney";
import { FinancialList } from "../../components/FinancialList";
import { transacoes } from "../../data/";

import "./style.css";
import { useState } from "react";

export const Home = ({ setPagina }) => {
  const [transactions, setTransactions] = useState(transacoes);
  const [filter, setFilter] = useState("Todos");

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  function removeTransaction(id) {
    let newList = transactions.filter((transac) => transac.id !== id);
    setTransactions(newList);
  }

  const filtered = () => {
    if (filter === "Todos") {
      return transactions;
    }
    return transactions.filter((transac) => transac.type === filter);
  };

  return (
    <div className="homePage">
      <Header setPagina={setPagina} />
      <div className="content">
        <div className="firstContent">
          <FinancialForm
            addTransaction={addTransaction}
            transactions={transactions}
          />
          <TotalMoney transacoes={filtered()} />
        </div>

        <FinancialList
          transactionsList={filtered()}
          setFilter={setFilter}
          removeTransaction={removeTransaction}
        />
      </div>
    </div>
  );
};
