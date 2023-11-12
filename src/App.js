import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import C02contador from './componentes/C02contador';
import Variables from './componentes/C04variables';
import C06matriz from './componentes/C06matriz';

function App() {
  return (
   <div>
     < C01componente />
     < C02contador />
     < Variables xVariable="Hola mundo" />
     <C06matriz />
   </div>
  );
}

export default App;