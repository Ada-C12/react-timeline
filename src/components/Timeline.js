import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import timelineData from '../data/timeline.json'

const Timeline = () => {
  const events = timelineData.events;

const timeLine = events.map((event, i) => {
  return (
    <div>
    <p key={i}>
      <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/>
    </p>
    </div>
  );
});

  return (
    timeLine
  );
}

export default Timeline;
