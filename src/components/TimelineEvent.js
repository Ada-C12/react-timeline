import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = ({person, status, timeStamp}) =>
    <div>
      <p>Person: {person} </p>
      <p>Status: {status} </p>
      <Timestamp time={timeStamp}/>
    </div>


export default TimelineEvent;