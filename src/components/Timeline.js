import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const EventComponents = props.events.map((event, i) => {
    return (
      <section key={i}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          timeStamp={event.timeStamp}
        />
      </section>
    )
  })
  
  return (
    <section className="timeline">
      {EventComponents}
    </section>
  )
}

export default Timeline;
