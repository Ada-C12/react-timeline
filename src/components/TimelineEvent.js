import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return(
    <div>
      person: { props.person }
      status: { props.status}
      timestamp: <Timestamp time={ props.timestamp } />
    </div>
  );
}

export default TimelineEvent;