import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className="ActionButton">
      {props.actions.map(symbol => {
        return <div className="box">{symbol.action}</div>;
      })}
    </div>
  );
};

export default ActionButton;
