import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({events}) =>
  events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent {...event} />
      </li>
    )
  })

export default Timeline;