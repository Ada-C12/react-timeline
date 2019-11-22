import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada's Timeline</h1>
      </header>
      <main className="App-main">
        <section className="timeline">
          <TimelineEvent event={timelineData.events[0]}/>
          <Timeline events={timelineData.events}/>
        </section>
      </main>
    </div>
  );
}

export default App;
