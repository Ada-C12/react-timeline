import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


// will take a list of timeline events as a prop &
// render a list of TimelineEvent components
const Timeline = (prop) => {
  const events = [
    {
      person: "Ada Lovelace",
      status: "ada@lovelace.uk",
    },
    {
      person: "Katherine Johnson",
      status: "kat@nasa.gov",
    },
  ];
  
  const timelineEventComponents = events.map((event, i) => {
    return (
      <ul key={i}>
        <li><TimelineEvent person={ event.person } status={ event.status } /></li>
      </ul>
    );
  });

  return (
    timelineEventComponents
  )
}

export default Timeline;