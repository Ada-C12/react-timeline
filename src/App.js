import React from "react";
import logo from "./logo.svg";
import "./App.css";
import timelineData from "./data/timeline.json";
import Timeline from "./components/Timeline";
import TimelineEvent from "./components/TimelineEvent";
import Timestamp from "./components/Timestamp";

function App() {
  console.log(timelineData);
  // Customize the code below
  return (
    <div className="App">
      <TimelineEvent person="Ada" status="good" />

      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main"></main>
    </div>
  );
}

export default App;
