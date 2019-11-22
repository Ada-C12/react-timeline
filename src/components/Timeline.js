import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  let timelineEvents = props["events"].map(function (event, i) {
    return (
      <li key={i}>
        <TimelineEvent person={event.person} timestamp={event.timeStamp} status={event.status} />
      </li>
    )
  })  
  return (
    <ul>
      { timelineEvents }
    </ul>
    );
}

export default Timeline;