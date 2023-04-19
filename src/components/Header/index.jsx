import logo from "../../assets/logoDark.png";

import "./style.css";

export const Header = ({ setPagina }) => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="" className="logo"/>
        <button
          type="button"
          className="lightButton headerButton"
          onClick={() => setPagina("")}
        >
          Início
        </button>
      </div>
    </header>
  );
};
