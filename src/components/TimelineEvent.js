import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const timestamp = <Timestamp time={props.timeStamp} />;
  const person = {props.person};
  const status = props.status;
  return (
    
  );
}

export default TimelineEvent;