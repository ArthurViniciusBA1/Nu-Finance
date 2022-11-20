import { useState } from "react";
import uuid from "react-uuid";

import "./style.css";

export const FinancialForm = ({ transactions, addTransaction }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  function submitNewTransaction(event) {
    event.preventDefault();

    const newTransaction = {
      description,
      value,
      type,
      id: uuid(),
    };

    addTransaction(newTransaction);

    setDescription("");
    setValue("");
    setType("Entrada");
  }

  return (
    <form
      onSubmit={submitNewTransaction}
      className="financialForm"
      type="submit"
    >
      <div>
        <label htmlFor="transactionDescription">Descrição</label>
        <input
          type="text"
          id="transactionDescription"
          placeholder="Digite aqui a descrição"
          required
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div>
        <div>
          <label htmlFor="transactionValue">Valor</label>
          <input
            type="number"
            id="transactionValue"
            required
            onChange={(event) => setValue(+event.target.value)}
            value={value}
          />
          <span id="currency">R$</span>
        </div>
        <div>
          <label htmlFor="selectTransacao">Tipo de valor</label>
          <select
            name="selectTransacao"
            onChange={(event) => setType(event.target.value)}
            value={type}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saída</option>
          </select>
        </div>
      </div>
      <button className="brandButton">Inserir Valor</button>
    </form>
  );
};
