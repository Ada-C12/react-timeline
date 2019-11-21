import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const timelineEventElements = props.events.map((event, i) => {
    return (
      <div key={i}>
        <TimelineEvent event={event}/>
      </div>
    )
  });
  return (
    <ul className='timeline'>
      {timelineEventElements}
    </ul>
  );
};

export default Timeline;