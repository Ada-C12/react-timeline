import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);

  // Customize the code below
  const eventsData = timelineData['events']
  
  return (
    <div className="App">

      <header className="App-header">
        <h1 className="App-title">
          {timelineData['person']}'s Timeline
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
      </header>

      <main className="App-main">
        <Timeline allEvents={eventsData}/>
      </main>

    </div>
  );
}

export default App;
