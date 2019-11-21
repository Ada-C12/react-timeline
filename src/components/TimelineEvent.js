import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div>
      <h3>{props.person}</h3>
      <h3>{props.status}</h3>
      <h3><Timestamp time={props.timestamp}/></h3>
    </div>
  );
}

export default TimelineEvent;
