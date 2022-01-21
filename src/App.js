import axios from "axios";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import api from "./services/api";

import "./styles.css";

function App() {
  const [input, setInput] = useState("");

  function handleSearch() {
    //01310930/json/
    if (input === "") {
      alert("Preencha o cep!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response);
    } catch {
      alert("Erro ao buscar");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o Cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 75903190</h2>
        <span>Rua Teste algum</span>
        <span>Complemento: algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default App;
