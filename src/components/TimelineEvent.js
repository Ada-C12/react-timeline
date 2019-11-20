import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // need to display, Timestamp, events.person, events.status, events.timestamp
  return (
    <div>
      <h1>This is the TimelineEvent</h1>
    
      <p> {props.person}</p>
      <p> {props.status}</p>
      <p> {props.timeStamp}</p>
    </div>
  );
}

export default TimelineEvent;