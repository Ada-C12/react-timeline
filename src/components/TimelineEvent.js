import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return(
    <section class="timeline-event">
      <p class="event-person">{props.person}</p>
      <p class="event-status">{props.status}</p>
      <p class="event-time"><Timestamp timeStamp={props.timeStamp}/></p>
    </section>
  );
};

export default TimelineEvent;
