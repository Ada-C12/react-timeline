import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // props is passed in via line 12 in Timeline.js, use it to make new new TimelineEvent Component obj
  // timestamp is sent off to Timestamp Component for processing
  const timestamp = <Timestamp time={props.timeStamp} />;
  const person = props.person;
  const status = props.status;

  // Take passed in data and make bulleted list JSX.  this is going to Timeline.js, then App.js
  return(
    <ul>
      <li>TIME: {timestamp}</li>
      <li>PERSON: {person}</li>
      <li>STATUS: {status}</li>
    </ul>
  );
}

export default TimelineEvent;