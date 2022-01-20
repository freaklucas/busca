import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o cep..." />
        <button className="buttonSearch">
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
