import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div>
      <li>{ props.event.person }</li>
      <li>{ props.event.status }</li>
      <li><Timestamp time={props.event.timeStamp}/></li>
    </div>
  );
};


export default TimelineEvent;