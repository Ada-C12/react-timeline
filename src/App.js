import React from 'react';
// import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);

  const userName = timelineData.person

  const timelineEvents = timelineData.events.map((event, i) => {
    return (
      <TimelineEvent key={i} person={event.person} status={event.status} time={event.time} />
    )
  });

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{userName}'s Timeline</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineEvents} />
        {/* <Timeline /> */}
      </main>
    </div>
  );
}

export default App;
