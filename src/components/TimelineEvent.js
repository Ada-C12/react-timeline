import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';


const TimelineEvent = (props) => {
  // person, status, timestamp
  return(
  <section className='timeline-event'>
    <h2>{props.person}</h2>
    <p>{props.status}</p>
    <p><Timestamp time={props.timeStamp} /></p>
  </section>
  )
}

export default TimelineEvent;