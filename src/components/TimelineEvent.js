import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = () => {
  // person, status, timestamp
  return <h3>person, status, <Timestamp time="may 22, 1979" /></h3>;
}

export default TimelineEvent;