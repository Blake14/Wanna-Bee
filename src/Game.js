import React from "react";
import "./Game.css";

function Game(props) {
  return (
    <div className="game">
      <h1>{props.name}</h1>
    </div>
  );
}

export default Game;
