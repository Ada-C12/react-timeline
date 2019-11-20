import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {

  console.log(timelineData);
  const events = timelineData.events;


  const allTimelines_array = <Timeline events={events}/>;

  // let allTimelines = [];
  // for (let event of events) {
  //   console.log(event.person);
  //   console.log(event.status);
  //   console.log(event.timeStamp);
  //   let singleTimeline = <Timeline person={event.person} status={event.status} timestamp={event.timeStamp}/>
  //   allTimelines.push (singleTimeline);
  // }
  
  console.log("FINAL:", allTimelines_array);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Talky Talk</h1>
      </header>
      <main className="App-main">

      <Timeline />
        
      </main>
    </div>
  );
}

export default App;
