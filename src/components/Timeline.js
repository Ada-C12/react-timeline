import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent person={ event.person } status={ event.status } />
      </li>
    );
  })

  return(
    <ul className="timeline"> { timelineComponents } </ul>
  )
}

export default Timeline;