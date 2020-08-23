import React from "react";
import Game from "./Game";
import "./App.css";
import Jukebox from "./Jukebox";

function App() {
  return (
    <div className="App-header">
      <div className="App" height="150px">
        {" "}
        Wanna-Bee Games{" "}
      </div>{" "}
      <div className="Menu">
        <h1> Trending </h1>
        <h1> Categories </h1>
        <h1> Your Favorites </h1>
      </div>{" "}
      <div>
        <h1 className="h">Game Canvas</h1>
        <Jukebox gameName="Pacman" />
      </div>
    </div>
  );
}

export default App;
