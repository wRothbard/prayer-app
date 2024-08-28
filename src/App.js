import { useState } from "react";

import logo from './logo.svg';
import './App.css';
import Prayer from './Prayer';

function App() {
  const [date, setDate] = useState(new Date());
  const onChange = (evt) => {
    setDate(new Date(evt.target.value));
    console.log(evt.target.value);
    console.log(date);
    console.log(date.toISOString().substring(0, 10));
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type="date" value={date.toISOString().substring(0, 10)} onChange={onChange} />
        <Prayer dow={ date.getDay() }/>
      </header>
    </div>
  );
}

export default App;
