import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);
  const event = {
    "person": "Adele Goldberg",
    "status": "In Smalltalk, everything happens somewhere else.",
    "time": "2018-05-18T22:12:03Z"
  }
  const events = timelineData;

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada's Application</h1>
      </header>
      <main className="App-main">
      {/* <TimelineEvent person={event.person} status={event.status} time={event.timeStamp}/> */}
      <Timeline/>
      </main>
    </div>
  );
}

export default App;
