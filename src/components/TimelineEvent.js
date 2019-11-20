import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  let person = props.person
  let status = props.status
  let timestamp = <Timestamp time={props.timestamp}/>
  return(
    <section className="timeline-event">
      <h3 className="event-person"> {person} </h3>
      <p className="event-time"> {timestamp}</p>
      <p className="event-status"> {status}</p>
    </section>
  )

}

export default TimelineEvent;