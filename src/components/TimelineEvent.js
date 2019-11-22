import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (

    // The names for the calls here reflect the JSON and their labels. NOTE: timeStamp is ALSO a callback to the JSON label. 

    // note how things HAVE to be wrapped in <div>s

    // className will be used for formatting in CSS 
    
    <div className = "timeline-event">
      <div className = "event-person>">{props.status}</div>
      <div className = "event-person>">{props.person}</div>

      <div className = "event-person>"><Timestamp time = {props.timeStamp}/></div>
    </div>
  );
}

export default TimelineEvent;