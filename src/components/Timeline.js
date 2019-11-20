import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events

  const eventsMap = events.map((event,i) => {
    return (
      <li key={i}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          time={event.timestamp}
        />
      </li>
    )
  });

  return (
    <section>
      <h4>{eventsMap}</h4>
    </section>
  );
}

export default Timeline;