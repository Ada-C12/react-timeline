import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import Person from './Person';
import Status from './Status';

const TimelineEvent = ({ person, status, timestamp }) => {
  
  return (
    <div className='timeline-event'>
      <section className='event-person'>
        <Person personName={person}/>
      </section>

      <section className='event-time'>
        <Timestamp time={new Date(timestamp)}/>
      </section>
      
      <section className='event-status'>
        <Status statusDescription={status}/>
      </section>
    </div>
  );
}

export default TimelineEvent;