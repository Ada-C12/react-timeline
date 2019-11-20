import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events.map((event, i) => {
    return (
    <div key={i}>
      <TimelineEvent 
        person={event.person}
        status={event.status}
        timestamp={event.timeStamp}
      />
    </div>
    );
  }); 

  return(
    <section className="timeline">
      {events}
    </section>
  );
}

export default Timeline;
