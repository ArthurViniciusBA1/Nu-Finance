import { useState } from "react";
import { Landing } from "./pages/landingPage";
import { Home } from "./pages/homePage";

const App = () => {
  const [pagina, setPagina] = useState('');

  switch (pagina) {
    case "Home":
      return <Home setPagina={setPagina} />;
    default:
      return <Landing setPagina={setPagina} />;
  }
};

export default App;