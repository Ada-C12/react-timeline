import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
  <h3> {props.message} 
  <br></br>
  {props.status} 
  <br></br>
  {props.timestamp} </h3>
  )
}

export default TimelineEvent;