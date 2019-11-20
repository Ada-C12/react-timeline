import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';


import TimelineEvent from "./components/TimelineEvent" // Remove this later


function App() {
  console.log(timelineData);

  const example = timelineData["events"][0]; // Remove this later

  // read json file and pass timeline events to timeline component which it will contain

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">


      <TimelineEvent person={example.person} status={example.status} timestamp={example.timeStamp}  />




      </main>
    </div>
  );
}

export default App;
