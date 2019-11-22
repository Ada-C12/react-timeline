import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events

  const eventsMap = events.map((event,i) => {
    return (
      <div key={i}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          time={event.timeStamp}
        />
      </div>
    )
  });

  return (
    <section className="timeline">
      <h4>{eventsMap}</h4>
    </section>
  );
}

export default Timeline;