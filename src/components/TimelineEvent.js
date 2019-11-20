import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return(
    <section>
      <p> name = {props.person} </p>
      <p>status = {props.status} </p> 
      <p>const timeStamp = {props.timeStamp}</p>
  </section>
  );
};

export default TimelineEvent;