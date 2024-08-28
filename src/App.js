import { useState } from "react";

import './App.css';
import Prayer from './Prayer';

import { LocalDate } from "@js-joda/core";

function App() {
  const [date, setDate] = useState(LocalDate.now());
  const onChangeDate = (evt) => setDate(LocalDate.parse(evt.target.value));
  return (
    <div className="App">
      <header className="App-header">
        <input type="date" value={date.toString()} onChange={onChangeDate} />
        <Prayer dow={ date.dayOfWeek().value() % 7 }/>
      </header>
    </div>
  );
}

export default App;
