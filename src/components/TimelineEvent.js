import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return(
    <section>
      <p> name = {props.person} </p>
      <p>status = {props.status} </p> 
      <p>time = <Timestamp time = {props.time} /> </p>
  </section>
  );
};

export default TimelineEvent;