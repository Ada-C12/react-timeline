import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // carrying in the attr called events from props
  // events is an array of single event hashes
  let events = props.events;

  // map thru events, make a TimelineEvent component obj for each one
  let timelines = events.map ((event, i) => {
    return <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/>;
  });

  return timelines;
}

export default Timeline;