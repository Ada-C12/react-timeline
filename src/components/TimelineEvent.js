import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import Timeline from './Timeline';
import timelineData from '../data/timeline.json';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event"> 
      <div className="event-person"> {props.event.person}</div>
      <div className="event-status">{props.event.status}</div>
      <div className="event-time"><Timestamp time={props.event.timeStamp}/></div>
    </div>
  );
}

export default TimelineEvent;