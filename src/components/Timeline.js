import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (prop) => {
  // this imports prop from TimelineEvent

  // This function creaes an array of hashes 
  const eventComponents = prop.events.map((event, i) => {
  return (
    <div>
      <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}/>
    </div>
  );
  });

// The array is returned
return eventComponents

}

export default Timeline;