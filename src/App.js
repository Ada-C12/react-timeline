import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {

  console.log(timelineData);


  // // filler is test data that can was used as alternative to JSON to make sure the process was catching
  // const filler = {
  //   "person": "Person of Interest",
  //   "events": [
  //     {
  //     "person": "Ima Test",
  //     "status": "You know, it's Friday.",
  //     "timeStamp": "2019-05-18T22:19:40Z"
  //     }
  //   ]
  // }

  return (
    <div className="App">

      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>

      <main className="App-main"></main>
      
      <div>
      {/* <Timeline events ={filler.events} /> */}
      <Timeline events ={timelineData.events} />
      </div>

    </div>
  );
}

export default App;
