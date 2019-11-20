import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (prop) => {
  const events = prop.events.map((event, i) => {
    return (
      <TimelineEvent key={i}
      person={ event.person } 
      status={ event.status } 
      timestamp={ event.timestamp } />
    );
  });
  return (
    <ul className="student-collection">
      {events}
    </ul>
  );
};

export default Timeline;