import React from "react";
import Game from "./Game";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <div className="App" height="150px">
        {" "}
        Wanna-Bee Games{" "}
      </div>{" "}
      <div className="Menu">
        <h1> Menu </h1>
      </div>{" "}
      <div>
        <Game name="Pacman" />
        <Game name="Snake" />
      </div>
    </div>
  );
}

export default App;
