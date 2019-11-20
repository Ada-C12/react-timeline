import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
// App will render the Timeline component
class App extends Component {
  render() {
    return (
    <Timeline events={timelineData.events} />
    )};
}

export default App;