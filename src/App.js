import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
import myData from './data/timeline.json'

function App() {
  console.log(timelineData);
  console.log(myData)

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's Social Media Feed</h1>
      </header>
      <main className="App-main">
        <ul>
          <Timeline events={myData.events} />
        </ul>
      </main>
    </div>
  );
}

export default App;
