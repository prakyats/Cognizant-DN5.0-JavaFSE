import { useState } from "react";

function EventExamples() {

  const [count, setCount] = useState(5);

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick() {
    alert("I was clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const euro = amount * 80;

    alert(`Converting to Euro Amount is ${euro}`);
  }

  return (
    <div style={{ margin: "30px" }}>

      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />

      <button onClick={() => sayWelcome("welcome")}>
        Say welcome
      </button>
      <br />

      <button onClick={handleClick}>
        Click on me
      </button>

      <br />
      <br />

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        <label>Amount:</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <label>Currency:</label>

        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default EventExamples;