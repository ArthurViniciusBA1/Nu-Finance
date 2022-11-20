import logo from "../../assets/NuKenzieDark.svg";

import "./style.css";

export const Header = ({ setPagina }) => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="" />
        <button
          type="button"
          className="lightButton"
          onClick={() => setPagina("")}
        >
          Início
        </button>
      </div>
    </header>
  );
};
