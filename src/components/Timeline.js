import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineArr = props.events.map((event, i) => {
    return(
      <TimelineEvent key={i} person={event.person} status={event.status} timeStamp={event.timeStamp} />
    );
  });

  return (
    <section className='timeline'>{timelineArr}</section>
    );
}

export default Timeline;
