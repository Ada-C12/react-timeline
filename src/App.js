import React from 'react';
import logo from './logo.svg';
import './App.css';
import timeline from './data/timeline.json';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'
function App() {
  
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">The MacAttack Global Diary</h1>
      </header>
      <main className="App-main">
      </main>
      <p className="allTimeline">
     <Timeline/> 
     </p>
    </div>
  );
}

export default App;
