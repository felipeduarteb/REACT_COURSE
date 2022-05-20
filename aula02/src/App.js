import { useState } from "react";
import { Nav, NavDois } from './components/nav';
import './components/nav/style.css';

function App() {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(false);
  // const [dadosPessoa, setDadosPessoa ] = useState({
  //   nome: 'Felipe',

  // })
 

  const somar = () => {
    setContador(contador + 1);
  }
  const diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  const handleAtive = () => {
    setAtivo(!ativo);
  }
  return (
    <div className="App">
      <Nav />
      <NavDois />
      <h1>Aula 2</h1>
      <h2>{contador}</h2>

      <button onClick={somar}>Somar</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={handleAtive} className={ativo ? 'ativo' : 'inativo'}> {ativo ? 'ativo' : 'inativo'}</button>

    </div>
  );
}

export default App;
