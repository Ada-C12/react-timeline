import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);
 
  // const events = [{person: 'Lambchop', status: 'Sooo Sleepy', timestamp: '2018-05-18T22:12:03Z'}]
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace Twitters</h1>
      </header>
      <main className="App-main">
      <Timeline events={timelineData.events}/>
      </main>
    </div>
  );
}

export default App;
