import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const timelineElements = props.events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent person={ event.person } status={ event.status } timestamp={event.timeStamp} />
      </li>
    );
  });
  
  return(timelineElements)
}

export default Timeline;