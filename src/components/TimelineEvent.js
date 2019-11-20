import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  

  return (
    <div className="timeline-event">
      <p className="event-person"><strong>{props.person}</strong></p>
      <p className="event-time"><Timestamp time={props.timestamp} /></p>
      <p className="event-status">{props.status}</p>
    </div>
  );
}

export default TimelineEvent;