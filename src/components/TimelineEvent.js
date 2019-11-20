import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';


const TimelineEvent = (props) => {
  
  return(
    <section>
      <p>Person: {props.person}</p>
      <p>Status: {props.status}</p>
      <p>Time: <Timestamp time={props.timestamp} /></p>
    </section>
  );
}

export default TimelineEvent;