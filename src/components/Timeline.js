import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({events}) =>
  <ul className="timeline">
  {events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent {...event} />
      </li>
    )
  })
  }
  </ul>

export default Timeline;