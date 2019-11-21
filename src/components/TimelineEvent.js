import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import thumbsUp from './thumb-up.svg';

const TimelineEvent = (props) => {
  let clickCount = 0;

  function callAlert(e) {
    e.preventDefault();
    clickCount += 1
    alert(`you liked this ${clickCount} times!`);
  };
  return (
    <div className="timeline-event">
      <p className="event-person"> Person: {props.person} </p>
      <p className="event-status"> Status: {props.status} </p>
      <p className="event-time"><Timestamp time = {props.timestamp}></Timestamp></p>
      <p className="event-like-button">
        <img onClick={callAlert} className="thumbs-up-icon" src={thumbsUp} alt="thumbs up"/>
      </p>
    </div>
  );
}

export default TimelineEvent;