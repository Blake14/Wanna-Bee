import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <div className="App"> WeBoard </div>{" "}
      <div className="Menu">
        <p1> Menu </p1> <p1> Help </p1> <p1> Contact </p1>{" "}
        <h1> It is {new Date().toLocaleDateString()}. </h1>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
