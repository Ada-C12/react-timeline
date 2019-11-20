import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventList = props.events
  const events = eventList.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent
        person={event.person}
        status={event.status}
        time={event.timeStamp}
        />
      </li>
    )
  })

  return (
    <section>
      <ul>{events}</ul>
    </section>
  )
}

export default Timeline;