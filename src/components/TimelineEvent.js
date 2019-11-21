import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = ({person, status, timeStamp}) =>
    <div className='timeline-event'>
      <p className='event-person'> {person} </p>
      <p className='event-status'> {status} </p>
      <p className='event-time'><Timestamp time={timeStamp}/></p>
    </div>


export default TimelineEvent;