import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const timestamp = <Timestamp time={props.timeStamp} />;
  const person = props.person;
  const status = props.status;
  return(
    <ul>
      <li>TIME: {timestamp}</li>
      <li>PERSON: {person}</li>
      <li>STATUS: {status}</li>
    </ul>
  );
}

export default TimelineEvent;