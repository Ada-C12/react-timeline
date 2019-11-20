import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <section>
      <p>person: {props.person}</p>
      <p>status: {props.status}</p>
      <p>timestamp: {props.timestamp}</p>
    </section>
  );
};

export default TimelineEvent;