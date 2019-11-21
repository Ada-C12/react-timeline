import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props);
  return(
    <div className = "timeline-event">
      <p className = "event-person">{props.user.person}</p>
      <p className = "event-status">{props.user.status}</p>
      <p className = "event-time"><Timestamp time = {props.user.timeStamp} /></p>
    </div>
  );
}

export default TimelineEvent;