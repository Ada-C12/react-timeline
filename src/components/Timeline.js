import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventList = props.events;
  const eventComponent = eventList.map((event, i) => {
    return (
      <section key={i}>
        <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/>
      </section>
    );
  });

  return (
    <section className="timeline">
        {eventComponent}
    </section>
  );
}

export default Timeline;