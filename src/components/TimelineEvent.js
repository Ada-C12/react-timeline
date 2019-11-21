import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import Timeline from './Timeline';
import timelineData from '../data/timeline.json';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event"> 
      <div className="event-person"> {props.person}</div>
      <div className="event-status">{props.status}</div>
      <div className="event-time"><Timestamp time={props.timeStamp}/></div>
    </div>
  );
}

export default TimelineEvent;