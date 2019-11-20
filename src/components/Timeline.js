import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({ events }) => {
  console.log(events);
  return(
    <section className='timeline'>
      <TimelineEvent event={ events[0] } />
    </section>
  );
}

export default Timeline;
