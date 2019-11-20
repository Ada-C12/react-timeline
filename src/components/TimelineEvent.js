import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <section>
      <p>person: {props.person}</p>
      <p>status: {props.status}</p>
      <p>timestamp: <Timestamp time={props.time}/></p>
    </section>
  );
};

export default TimelineEvent;