import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({ events }) => {
  const line = event => <TimelineEvent event={event}/>;
  
  return(
    <ul className='timeline'>
      { events.map(line) }
    </ul>
  );
}

export default Timeline;
