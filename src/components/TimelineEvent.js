import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <article className="timeline-event">
      <span className="event-person">{props.person}</span>
      <span className="event-status">{props.status}</span>
      <span className="event-time"><Timestamp time={props.timestamp}/></span>
    </article>
  );
}

export default TimelineEvent;
