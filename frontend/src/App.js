import logo from './logo.svg';
import './App.css';

function App() {
  const add = async () => {
    try {
      const req = await fetch("http://localhost:8800/produts/2", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome : "Mouse não automatico",
          descricao : "Porduto semi usado, com um pequeno defeito de fabrica",
          categoria : "tecnologia",
          foto1 : 'loysy@gamil.com',
          foto2 : "12265978",
          foto3 : "hptts://dsfndsljgasdojan.com",
          foto4 : '989 48515 5656',
          valor : '33,10',
          vendido : true,
          dataCriacao : "2024-09-28",
          idUsuario : 2
        })
      })
      const res = await req.json();
      console.log(res);
    }  catch (error) {
      console.error('Erro:', error);
    }
  }

  /*
  const add = async () => {
    try {
      const req = await fetch("http://localhost:8800/users/2", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome : "Mouse automatico",
          cpf : "5.49849849495",
          email : "lioys@gamil.com",
          senha : '154dvdsgds',
          foto : "sdfasijgn562.com",
          fone : "21915195195195"
        })
      })
      const res = await req.json();
      console.log(res);
    }  catch (error) {
      console.error('Erro:', error);
    }
  }

  const add = async () => {
    try {
      const req = await fetch("http://localhost:8800/produts/2", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome : "Mouse automatico",
          descricao : "Porduto semi usado, com um pequeno defeito de fabrica",
          categoria : "tecnologia",
          foto1 : 'loysy@gamil.com',
          foto2 : "12265978",
          foto3 : "hptts://dsfndsljgasdojan.com",
          foto4 : '989 48515 5656',
          valor : '33,10',
          vendido : true,
          dataCriacao : "2024-09-28",
          idUsuario : 2
        })
      })
      const res = await req.json();
      console.log(res);
    }  catch (error) {
      console.error('Erro:', error);
    }
  } */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={() => {add()}}
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
