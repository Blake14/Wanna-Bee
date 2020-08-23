import React from "react";
import "./Jukebox.css";
import Game from "./Game";

function Jukebox(props) {
  var gameName = Game(props.gameName);
  return <div className="Jukebox">{props.gameName}</div>;
}

export default Jukebox;
