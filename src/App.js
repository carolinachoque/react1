
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import C02contador from './componentes/C02contador';
import Variables from './componentes/C04variables';
import C06matriz from './componentes/C06matriz';

function App() {
  return (
    <div>
      <C01componente />
      
    </div>
  );
}


