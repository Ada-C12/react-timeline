import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import Timestamp from './Timestamp';

const Timeline = (props) => {  
  const timelineEventComponents = props.events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent person= {event.person} status={event.status} timestamp={event.timeStamp} />
      </li>
    );
  });

  return (
    <ul className="timeline">
      {timelineEventComponents}
    </ul>
  );
};

export default Timeline;
