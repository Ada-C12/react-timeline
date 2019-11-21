import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const events = props.events;
  
  const timelineComponents = events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent person={event.person} status={event.status} time={event.timeStamp} />
      </li>
    )
  })
  
  return (
    timelineComponents
  )

}

export default Timeline;