import logo from './logo.svg';
import './App.css';

function App() {
  const add = async () => {
    try {
      const req = await fetch("http://localhost:8800/7", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const res = await req.json();
      console.log(res);
    }  catch (error) {
      console.error('Erro:', error);
    }
  }

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
