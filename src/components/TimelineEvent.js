import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div>
    <h3>{props.event.person}</h3>
    <h3>{props.event.status}</h3>
    <h3>{props.event.timeStamp}</h3>
    <h3>TimeStamp time={props.event.timeStamp}</h3>

  </div>

  );
}

export default TimelineEvent;