import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);

  const postData = {person: 'Mr. Magoo', status: 'I can\'t see, but I have places to go!'}

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
      </main>
      <Timeline />
    </div>

  );
}

export default App;
