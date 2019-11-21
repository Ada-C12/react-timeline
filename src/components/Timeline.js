import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
const timelineCollection = props.events.map((event, i) => {
  return (
    <li key={i}>
        <TimelineEvent event={event} />
    </li>
    )
  }
)
  
  
  return(
    <div className="timeline">
    {timelineCollection}
    </div>
  )
};

export default Timeline;

