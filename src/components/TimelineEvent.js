import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div>
    <p>{props.person}</p>
    <p>{props.status}</p>
    <Timestamp time={props.timestamp}/>
    </div>
  );
}

export default TimelineEvent;
