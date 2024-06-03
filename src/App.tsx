import { useState } from "react";
import "./global.scss";

interface DateInputProps {
  birthYear: number | string;
  setBirthYear: (val: number) => void;
  birthMonth: number | string;
  setBirthMonth: (val: number) => void;
  birthDay: number | string;
  setBirthDay: (val: number) => void;
}

interface OutputProps {
  birthYear: number;
  birthMonth: number;
  birthDay: number;
}

function App() {
  const [birthYear, setBirthYear] = useState<string | number>("");
  const [birthMonth, setBirthMonth] = useState<string | number>("");
  const [birthDay, setBirthDay] = useState<string | number>("");
  return (
    <main id="main">
      <div className="card">
        <DateInputs
          birthYear={birthYear}
          setBirthYear={setBirthYear}
          birthMonth={birthMonth}
          setBirthMonth={setBirthMonth}
          birthDay={birthDay}
          setBirthDay={setBirthDay}
        />
        <div className="breakline">
          <img src="images/icon-arrow.svg" alt="icon-arrow" />
        </div>
        <Output birthYear={+birthYear} birthMonth={+birthMonth} birthDay={+birthDay} />
      </div>
    </main>
  );
}

function DateInputs(props: DateInputProps) {
  return (
    <div className="date-inputs">
      <div>
        <label>DAY</label>
        <input
          type="text"
          placeholder="DD"
          value={props.birthDay}
          onChange={(e) => props.setBirthDay(+e.target.value)}
        />
      </div>
      <div>
        <label>MONTH</label>
        <input
          type="text"
          placeholder="MM"
          value={props.birthMonth}
          onChange={(e) => props.setBirthMonth(+e.target.value)}
        />
      </div>
      <div>
        <label>YEAR</label>
        <input
          type="text"
          placeholder="YYYY"
          value={props.birthYear}
          onChange={(e) => props.setBirthYear(+e.target.value)}
        />
      </div>
    </div>
  );
}

function Output({ birthYear, birthMonth, birthDay }: OutputProps) {
  const today = new Date();
  const year = today.getFullYear() - birthYear;
  let month = today.getMonth() + 1 - birthMonth;
  const day = Math.abs(today.getDate());
  console.log(day);

  if (month < 0) {
    month += 12;
  }

  return (
    <div className="output">
      <p>
        <span>{birthYear > 1920 && birthYear < new Date().getFullYear() ? year : "- -"} </span> years
      </p>
      <p>
        <span>{birthMonth > 0 && birthMonth < 13 ? month : "- -"} </span> months
      </p>
      <p>
        <span>{birthDay > 0 && birthDay < 31 ? day : "- - "} </span> days
      </p>
    </div>
  );
}

export default App;
