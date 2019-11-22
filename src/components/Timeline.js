import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event, i) => {
    return (
      <TimelineEvent post={ event } key={ i } />
    );
  });
  
  return (
    <section className="timeline">
      {eventComponents}
    </section>
  );
}

export default Timeline;