import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events;
  const timelineEvents = events.map((event) => {
    return (
      <TimelineEvent person={event.person} timeStamp={event.timeStamp} status={event.status} />
    )
  })


  
  return (
    <div>
      {timelineEvents}
    </div>
  );
}

export default Timeline;