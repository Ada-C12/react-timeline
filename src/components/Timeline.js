import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import timelineData from '../data/timeline.json';

const Timeline = () => {
  const events = timelineData.events

  const timeLine = events.map((event, i) => {
    return (
      <div className="timeLine">
        <p key={i}>
        <TimelineEvent person={event.person} status={event.status} time={event.timeStamp}/>
        </p>
      </div>
    );
  });

  return (
    timeLine
  );
}

export default Timeline;