import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const person = props.person;
  const status = props.status;
  const timestamp = props.timeStamp;
  
  return (
    <div>
      <span> {person}</span>
      <Timestamp time={timestamp} />
      <p> {status}</p>
    </div>
  );
}

export default TimelineEvent;