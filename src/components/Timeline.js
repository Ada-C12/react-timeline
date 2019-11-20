import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const listOfEvents = props.events;
  const arrayOfEvents = listOfEvents.map((event, i) => {
    return(
        <TimelineEvent 
        person = {event.person}
        status = {event.status}
        timeStamp = {event.timeStamp}
        />
    )
  });

  return(
    <ul>
    {arrayOfEvents}
    </ul>
  );
};

export default Timeline;

