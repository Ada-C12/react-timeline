import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const allEvents = props.events.map((event, i) => {
    return (
      <p>
        <TimelineEvent
          person={event.person}
          status={event.status}
          timestamp={event.timeStamp}
        />
      </p>
    )
  });
  return(
    <section>
      <section className="timeline">
        {allEvents}
      </section>
    </section>


  );
}

export default Timeline;