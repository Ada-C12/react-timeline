import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import { timeout } from 'q';


// will take individual timeline event data & render it
// each TimelineEvent with contain a person, status message
// and timestamp

// will need to use timestamp component inside this 
const TimelineEvent = (props) => {
  
  
  return (
  <div className='timeline-event'>
    <p className='event-person'>{props.person}</p>
    <p className='event-status'>{props.status}</p>
    <p className='event-time'><Timestamp time={props.timestamp} /></p>
  </div>
  )
};

export default TimelineEvent;