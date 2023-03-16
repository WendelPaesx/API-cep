
import { useState } from 'react';
import './App.css';

function App() {

  let [endereco, setEndereco] = useState({})

  function manipularEndereco(evento) {
    let cep = evento.target.value

    setEndereco({
      cep
    })
    if (cep && cep.length === 8) {
      // obter endereço.
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
          setEndereco(enderecoAntigo => {
            return {
              ...enderecoAntigo,
              rua: dados.logradouro,
              bairro: dados.bairro,
              uf: dados.uf,
              

            }

          })
        })
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='Digite o CEP' onChange={manipularEndereco} />
        <ul>
          <li> Localidade:{endereco.rua}</li>
          <li>Bairro:{endereco.bairro}</li>
          <li>UF: {endereco.uf}</li>
          <li>CEP: {endereco.cep}</li>

        </ul>
      </header>
    </div>
  );
}

export default App;
