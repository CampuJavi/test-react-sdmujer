
import './App.css';
import WelcomeComponent from './components/WelcomeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          <WelcomeComponent/>
        /* llamar al compoente creado aqui*/
        }
      </header>
    </div>
  );
}

export default App;
