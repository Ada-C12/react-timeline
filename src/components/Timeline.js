import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  let timelines = [];
  let events = props.events;

  for (let event of events) {
    let singleEvent = <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/>;
    
    timelines.push(singleEvent);
  }


  return timelines;
}

export default Timeline;