import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  let person = props.person
  let status = props.status
  let timestamp = <Timestamp time={props.timestamp}/>
  return(
    <h2> {person} {timestamp} {status} </h2>
  )

}

export default TimelineEvent;