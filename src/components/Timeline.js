import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  let events = props.events
  
  const eventComponents = events.map((event, i) => {
    return (
      <section key={i}>
        <TimelineEvent 
          person={event.person} 
          status={event.status}
          timestamp={event.timeStamp} 
        />
      </section>
    );
  });
  
  return(
    <section className="timeline">
      {eventComponents}        
    </section>
  );
};

export default Timeline;