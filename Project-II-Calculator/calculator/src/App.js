import React from "react";
import Display from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import "./App.css";

const App = () => {
  const numbers = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 0 }
  ];

  const actions = [
    { action: "-" },
    { action: "X" },
    { action: "/" },
    { action: "+" },
    { action: "=" }
  ];

  return (
    <div className="App">
      <div>
        <Display />
      </div>
      <div className="middle">
        <NumberButton numbers={numbers} />
        <ActionButton actions={actions} />
      </div>
    </div>
  );
};

export default App;
