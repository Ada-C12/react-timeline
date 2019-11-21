import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events
  
  const timelineComponents = events.map( (event, i) => {
    return (
      <p key={i}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          timeStamp={event.timeStamp}
        />
      </p>

    );
  });

  return (
    <section className="timeline">
      <h2>
        Timeline Events
      </h2>
      <p>
        {timelineComponents}
      </p>
    </section>
  )
}

export default Timeline;