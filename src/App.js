import { useState } from "react";

import logo from './logo.svg';
import './App.css';
import Prayer from './Prayer';

import { LocalDate } from "@js-joda/core";

function App() {
  const [date, setDate] = useState(LocalDate.now());
  const onChange = (evt) => setDate(LocalDate.parse(evt.target.value));
  return (
    <div className="App">
      <header className="App-header">
        <input type="checkbox" />
        <input type="date" value={date.toString()} onChange={onChange} />
        <Prayer dow={ date.dayOfWeek().value() % 7 }/>
      </header>
    </div>
  );
}

export default App;
