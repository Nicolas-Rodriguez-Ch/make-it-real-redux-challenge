import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { INCREMENT, DECREMENT, MULTIPLY, DIVIDE, ASSING } from './store';
import Counter from './components/Counter';
import InputText from './components/InputText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
        <Button typeAction={INCREMENT}>incrementar</Button>
        <Button typeAction={DECREMENT}>decrementar</Button>
        <Button typeAction={MULTIPLY}>multiplicar</Button>
        <Button typeAction={DIVIDE}>dividir</Button>
        <InputText typeAction={ASSING}/>
      </header>
    </div>
  );
}

export default App;