import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  let events = props.events
  
  const eventComponents = events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent 
          person={event.person} 
          status={event.status}
          timestamp={event.timeStamp} 
        />
      </li>
    );
  });
  
  return(
  <section>
      <ul>
        <li>
          {eventComponents}
        </li>
      </ul>
    </section>
  );
};

export default Timeline;