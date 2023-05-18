import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/organisms/navbar";
import { Rotas } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
