import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events;

  const eventsComp = events.map((event, i) => {
    return (
    <section key={i}>
      <TimelineEvent
        person = {event.person}
        status = {event.status}
        timestamp = {event.timeStamp}
        />
    </section>
    )
  })

  return (
    <section className="timeline">
      <p>
        {eventsComp}
      </p>
    </section>
  )
}
  


export default Timeline;