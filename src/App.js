import logo from './logo.svg';
import './App.css';
import Prayer from './Prayer';

const date = new Date();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Prayer dow={ date.getDay() }/>
      </header>
    </div>
  );
}

export default App;
