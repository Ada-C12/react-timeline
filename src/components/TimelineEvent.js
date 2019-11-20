import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // need to display, Timestamp, events.person, events.status, events.timestamp
  return (
    <div className="timeline-event" >
      {/* <h1>This is the TimelineEvent</h1> */}
    
      <p className="event-person"> {props.person}</p>
      <p className="event-status"> {props.status}</p>
      <p className="event-time">
      <Timestamp time={props.timeStamp}/></p>
    </div>
  );
}

export default TimelineEvent;