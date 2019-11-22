import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
const timelineEvents = props.events.map((event, i) => {

  return (
    <li key={i}>
      < TimelineEvent event={event} key={i} />
    </li>
  )
});

  return (
    <div className="timeline">
    {timelineEvents}
    </div>
  );

};

export default Timeline;
