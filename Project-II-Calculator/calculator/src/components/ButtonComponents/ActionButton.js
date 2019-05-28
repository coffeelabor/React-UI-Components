import React from "react";
import "./Button.css";

const Actions = [
  { action: "#" },
  { action: "##" },
  { action: "###" },
  { action: "####" }
];

const ActionButton = () => {
  return (
    <div className="Button">
      {Actions.map(symbol => {
        return <div className="box">{symbol.action}</div>;
      })}
    </div>
  );
};

export default ActionButton;
