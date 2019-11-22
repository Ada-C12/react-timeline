import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events

  const eventComponents = events.map((event, i) => {
    return (
      
      <div className="App-main">
        <TimelineEvent event={event} key={i}/>
      </div>
    );
  });
  return eventComponents;
}

export default Timeline;