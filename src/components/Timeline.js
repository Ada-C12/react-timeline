import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  let timelines = [];
  let events = props.events;

  timelines = events.map ((event, i) => {
    return <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/>;
  });

  return timelines;
}

export default Timeline;