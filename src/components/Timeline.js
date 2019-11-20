import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const events = props.events
  
  const timeComponents = events.map((event, i) => {
    return (
      <section key={i}>
        <TimelineEvent person={ event.person } status={ event.status } timestamp={ event.timeStamp} />
      </section>
    );
  });

  return (
    <div className="timeline">
        {timeComponents}
    </div>
  );
}

export default Timeline;