import React from "react";
import "./Button.css";

const Numbers = [
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

const NumberButton = () => {
  return (
    <div className="NumberButton">
      {Numbers.map(num => {
        return <div className="box">{num.number}</div>;
      })}
    </div>
  );
};

export default NumberButton;
