import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = ({ event: { person, status, timeStamp }}) => {
  return(
    <section className='timeline-event'>
      <h3 className='event-person'>{ person }</h3>
      <p className='event-status'>{ status }</p>
      <span className='event-time'>
        <Timestamp time={ timeStamp }/>
      </span>
    </section>
  );
}

export default TimelineEvent;
