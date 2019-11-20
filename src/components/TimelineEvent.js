import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import Timeline from './Timeline';

const TimelineEvent = (props) => {
  let timestamp = <Timestamp time={props.timestamp} />
  return(
    <section className = "timeline-event">
      <p className = "event-person">{props.person}</p>    
      <p className = "event-status">{props.status} </p>
      <p className = "event-time">{timestamp}</p>

    </section>
  )
}

export default TimelineEvent;