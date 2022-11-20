import imagem from "../../assets/landingPage.svg";
import logo from "../../assets/NuKenzie.svg";

import "./style.css";

export const Landing = ({ setPagina }) => {
  return (
    <div className="landingPage">
      <div className="left">
        <img src={logo} alt="" />
        <div>
          <p className="tittle1">Centralize o controle das suas finanças</p>
          <span>De forma rápida e segura</span>
          <button
            type="button"
            className="brandButton"
            onClick={() => setPagina("Home")}
          >
            Iniciar
          </button>
        </div>
      </div>
      <div className="right">
        <img src={imagem} alt="" />
      </div>
    </div>
  );
};
