import React from 'react';
import logo from './logo.svg';
import './App.css';
import eventsData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(eventsData);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{eventsData.person}'s Social Media Feed</h1>
      </header>
      <main className="App-main">
        <div> <Timeline/></div>
      </main>
    </div>
  );
}

export default App;
