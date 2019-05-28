import React from "react";
import CardContainer from "./components/CardComponents/CardContainer";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <CardContainer />
      <HeaderContainer />
    </div>
  );
};

export default App;
