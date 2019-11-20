import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const allEvents = props.events.map((event, i) => {
    return (
      // each child in a list must have a unique key
      <section key={i}>
        <li>
          <TimelineEvent person={ event.person } status={event.status } timestamp={ event.timeStamp } />
        </li>
      </section>
    );
  });

  return (
    <section className='timeline'>
      <ul>
          {allEvents}
      </ul>
    </section>
  );
}

export default Timeline;