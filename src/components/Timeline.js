import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


// will take a list of timeline events as a prop &
// render a list of TimelineEvent components
const Timeline = (props) => {

  const timelineEventComponents = props.events.map((event, i) => {
    return (
      <ul key={i}>
        <li><TimelineEvent person={ event.person } status={ event.status } timestamp={ event.timeStamp } /></li>
      </ul>
    );
  });

  return (
    timelineEventComponents
  )
}

export default Timeline;