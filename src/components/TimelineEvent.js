import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const thisTime = props.timeStamp;
  return (
    <section className="timeline-event">
      <span className="event-person">{props.person}</span>
      <Timestamp time={thisTime}/>
      <p className="event-status">{props.status}</p>
    </section>
  );
}

export default TimelineEvent;