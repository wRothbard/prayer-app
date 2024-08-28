import { useState } from "react";

import './App.css';
import DowPrayer from './DowPrayer';
import MissionPrayer from './MissionPrayer';

import { LocalDate, ChronoUnit } from "@js-joda/core";

function App() {
  const [date, setDate] = useState(LocalDate.now());
  const onChangeDate = (evt) => setDate(LocalDate.parse(evt.target.value));
  const epoch = LocalDate.of(2019, 1, 1);
  const duration = epoch.until(date, ChronoUnit.DAYS);
  const mod4 = duration % 4;
  return (
    <div className="App">
      <header className="App-header">
        <input type="date" value={date.toString()} onChange={onChangeDate} />
        <DowPrayer dow={ date.dayOfWeek().value() % 7 }/>
        <MissionPrayer ndx={ mod4 }/>
      </header>
    </div>
  );
}

export default App;
