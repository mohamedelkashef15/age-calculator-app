import "./global.scss";

function App() {
  return (
    <main id="main">
      <section className="card">
        <DateInputs />
        <div className="breakline">
          <img src="images/icon-arrow.svg" alt="icon-arrow" />
        </div>
        <Output />
      </section>
    </main>
  );
}

function DateInputs() {
  return (
    <div className="date-inputs">
      <div>
        <label>DAY</label>
        <input type="text" placeholder="DD" />
      </div>
      <div>
        <label>MONTH</label>
        <input type="text" placeholder="MM" />
      </div>
      <div>
        <label>YEAR</label>
        <input type="text" placeholder="YYYY" />
      </div>
    </div>
  );
}

function Output() {
  return (
    <div className="output">
      <p>
        <span>- - </span> years
      </p>
      <p>
        <span>- - </span> months
      </p>
      <p>
        <span>- - </span> days
      </p>
    </div>
  );
}

export default App;
