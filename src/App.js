import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'

function App() {
  console.log(timelineData);

  const jsonEvents = timelineData.events;
  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Very cool timeline</h1>
      </header>
      <main className="App-main">
      <Timeline events= {jsonEvents} />
      </main>
    </div>
  );
}

export default App;
