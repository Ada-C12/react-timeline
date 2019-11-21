import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's Social Media Feed</h1>
      </header>
      
      <main className="App-main">
        <Timeline events={timelineData.events} />
      </main>
      
      {/* <TimelineEvent person="Ada Lovelace" status="cruising" timestamp="stamp"/> */}
    </div>
    
  );
}

export default App;
