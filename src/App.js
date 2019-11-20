import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  // started with timelineData from json
  // console.log(timelineData);

  // take the events which is an array of single event hashes, send it off to Timeline component for processing
  const events = timelineData.events;
  const allTimelines_array = <Timeline events={events}/>;
  
  // console.log("FINAL:", allTimelines_array);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">{timelineData.person}'s Talky Talk</h1>
      </header>

      <main className="App-main">

      {allTimelines_array}

      <img src={logo} alt="logo" />
        
      </main>
    </div>
  );
}

export default App;
