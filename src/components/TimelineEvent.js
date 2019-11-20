import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <section>
      <h2>A Timeline Event</h2>
      <p>{props.person}</p>
      <p>{props.status}</p>
      <Timestamp time={props.time}/>
    </section>
  );
}

export default TimelineEvent;