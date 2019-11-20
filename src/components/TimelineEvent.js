import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const person = '';
  const status = '';
  const timestamp = <Timestamp time = {props.timestamp}/>;

  return (
    <section className='timeline-event'>
      <h3 className='event-person'>{props.person}</h3>
      <p className='event-time'>{timestamp}</p>
      <p className='event-status'>{props.status}</p>
     </section>
  );
};

export default TimelineEvent;
