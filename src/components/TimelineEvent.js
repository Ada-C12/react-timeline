import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <section>
      <p>{props.person}</p>
      <p>{props.status}</p>
      <p><Timestamp time={props.time}/></p>
    </section>
  )
}

export default TimelineEvent;