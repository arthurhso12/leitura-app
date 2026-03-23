import { useEffect } from "react";
import api from "./services/api";

function App() {

  useEffect(() => {
    console.log("Testando conexão...");

    api.get("/")
      .then(res => console.log("RESPOSTA:", res.data))
      .catch(err => console.log("ERRO:", err));
  }, []);

  return <h1>Frontend conectado 🚀</h1>;
}

export default App;