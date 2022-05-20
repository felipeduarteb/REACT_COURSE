import { useEffect, useState } from 'react';
import { CardMovie } from "./components/cards";
import "./global/style-app.css";

function App() {
  const [contador, setContador] = useState(0);
  // const [diminuir, setDiminuir] = useState(0);
  const [fimes, setFilmes] = useState([]);

  // const buscaValor = () => {
  //   fetch('https://61d3bc23b4c10c001712ba53.mockapi.io/tasks')
  //     .then(response => response.json())
  //     .then(data => {
  //       setFilmes(data);
  //     });
  // }
  const buscaValor = async () => {
    const response = await fetch('https://61d3bc23b4c10c001712ba53.mockapi.io/tasks');
    const data = await response.json();
    setFilmes(data);
  }
  

  useEffect(() => {
    buscaValor();
  }, []);


  return (
    <div className="App">
      <h1>Target</h1>
      <CardMovie />
      <div></div>
      <button onClick={() => setContador(contador + 1)} >Somar</button>
      <button onClick={() => setContador(contador - 1)} >Diminuir</button>
      <div className='.container-app'>
        {fimes.map((item) => {
          return (
              <CardMovie movie={item} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
