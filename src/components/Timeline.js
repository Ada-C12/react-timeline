import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event, i) => {
  return (
    <section >
    <TimelineEvent 
      person={event.person}
      status={event.status}
      timeStamp={event.timeStamp}/>
      </section>
    );
  });
  return eventComponents
}

export default Timeline;