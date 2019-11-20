import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const timestamp = <Timestamp />
  return (
    <p>{props.person} {props.status} {timestamp}</p>
  )
}

export default TimelineEvent;