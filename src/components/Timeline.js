import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (events) => {

  const eventsCollection = events.allEvents.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent
          person={event['person']}
          status={event['status']}
          timestamp={event['timeStamp']}
        />
      </li>
    )
  })

  return (
    <div className='timeline'>
      <ul>
        {eventsCollection}
      </ul>
    </div>
  );
}

export default Timeline;