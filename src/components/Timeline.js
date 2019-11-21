import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineEvents = props.events.map((event, i) => {
    return(
      <session className="timeline">
        <TimelineEvent person={event.person} status={event.status} timestamp={event.timeStamp} />
      </session>
    )
  });
  
  return(
    timelineEvents
  );
}

export default Timeline;