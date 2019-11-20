import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventList = props.events
  const events = eventList.map((event, i) => {
    return (
      <section key={i}>
        <TimelineEvent
        person={event.person}
        status={event.status}
        time={event.timeStamp}
        />
      </section>
    )
  })

  return (
    <section className='timeline'>
      <section>{events}</section>
    </section>
  )
}

export default Timeline;