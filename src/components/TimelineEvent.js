import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const timestamp = <Timestamp />
  return (
    <div className="timeline-event">
      <span className="event-person">{props.person}</span> 
      <span className="event-status">{props.status}</span> 
      <span className="event-time">{timestamp}</span>
    </div>
  )
}

export default TimelineEvent;