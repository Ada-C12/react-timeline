import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
const events = props.events;

const eventsComp = events.map((event,i) => {
  return(
    <p key = {i}>
    <TimelineEvent
      person={event.person}
      timestamp={event.timestamp}
      status={event.status}
    />
  </p>
  )
});


return (
  <section className = "timeline">
    <p>{eventsComp}</p>
  </section>
    )
};


export default Timeline;