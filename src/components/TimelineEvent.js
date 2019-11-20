import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // let event = props;
  // console.log(event);
  return (
    <div className="timeline-event">
      <p className="event-person">
        Person: { props.person }
      </p>
      <p className="event-status">
        Status: { props.status }
      </p>
      <p className="event-time">
        <Timestamp time={props.timestamp}></Timestamp>
      </p>
    </div>
  );
}

export default TimelineEvent;