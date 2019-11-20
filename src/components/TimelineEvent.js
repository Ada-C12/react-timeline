import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div>TimelineEvent
      <h3>{props.person}</h3>
      <h3>{props.status}</h3>
      <h3>{props.timestamp}</h3>
      {/* use the existing timestamp component to render the time and date of the event */}
    </div>
  );
}

export default TimelineEvent;
