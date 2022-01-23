import axios from "axios";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import api from "./services/api";

import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    //01310930/json/
    if (input === "") {
      alert("Preencha o cep!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      console.log(response.data);
      setInput("");
    } catch {
      alert("Erro ao buscar");
      setInput("");
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
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>DDD: {cep.ddd}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
