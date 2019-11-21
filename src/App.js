import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'


function App() {
  console.log(timelineData)

  const events = timelineData.events

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s Social Media Feed</h1>
      </header>
      <main className="App-main">
      <TimelineEvent person='Adele Goldberg' status='In Smalltalk, everything happens somewhere else.' timeStamp='2019-11-20T08:12:03Z'  />
      </main>
    </div>
  );
}

export default App;
