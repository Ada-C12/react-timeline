import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <section className="timeline-event">
      <section className="event-person">
        { props.person }
      </section>

      <section className="event-status">
        { props.status }
      </section>

      <section className="event-time">
      <Timestamp time={new Date(props.timestamp)}/>
      </section>
    </section>
  );
}

export default TimelineEvent;