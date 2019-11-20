import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';



const Timeline = (props) => {
  console.log(props);
  // let events = props;

  let timelineEvents = props["events"].map(function (event, i) {
    console.log(event)
    return (
      <li key={i}>
        <TimelineEvent person={event.person} status={event.status} timestamp={event.timeStamp} />
      </li>
    )
  });
  return (
    <ul>
      { timelineEvents }
    </ul>
  );
}

export default Timeline;