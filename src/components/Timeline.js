import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events
  
  const eventComponents = events.map((event, i) => {
    return (
      <div key={i}>
        <TimelineEvent user = {event} />
      </div>
    );
  });
 return eventComponents;
};

export default Timeline;
