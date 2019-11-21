import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <section className="timeline-event">
      <p className="event-person">person: {props.person}</p>
      <p className="event-status">status: {props.status}</p>
      <p className="event-time">timestamp: <Timestamp time={props.time}/></p>
    </section>
  );
};

export default TimelineEvent;