import React from 'react';
import './Timeline.css';
import eventsData from '../data/timeline.json';
import TimelineEvent from './TimelineEvent';

const Timeline = () => {
  const eventComponents = eventsData.events.map((event) => {
    return (
      <TimelineEvent person={ event.person } status={ event.status } timeStamp={ event.timeStamp } />
    );
  });

  return (
    eventComponents
  );
};

export default Timeline;