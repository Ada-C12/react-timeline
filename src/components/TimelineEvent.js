import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className='timeline-event'>
    <h3 className='event-person'>{props.event.person}</h3>
    <h3 className='event-status'>{props.event.status}</h3>
    <h3 className='event-time'><Timestamp time={props.event.timeStamp}/></h3>

  </div>

  );
}

export default TimelineEvent;