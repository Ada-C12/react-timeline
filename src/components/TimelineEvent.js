import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import thumbsUp from './thumb_up-24px.svg'

const TimelineEvent = (props) => {
  // let event = props;
  // console.log(event);
  function callAlert(e) {
    e.preventDefault();
    alert('You like it!');
  }
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
      <p className="event-like-button">
        <img onClick={callAlert} className="thumb" src={thumbsUp} alt="thumbs up" />
      </p>
    </div>
  );
}

export default TimelineEvent;