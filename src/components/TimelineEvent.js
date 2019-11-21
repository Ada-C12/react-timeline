import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const timeStamp = <Timestamp time = {props.timestamp}/>;
  return (
    <section className='timeline-event'>
      <h2 className='event-person'>{props.person}</h2>
      <p className='event-status'>{props.status}</p>
      <p className='event-time'>{timeStamp}</p>
    </section>
  )
}

export default TimelineEvent;