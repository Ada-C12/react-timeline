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
    "timeStamp": "2018-05-18T22:12:03Z"
  }
  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
      <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/>
      </main>
    </div>
  );
}

export default App;
