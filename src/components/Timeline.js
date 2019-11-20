import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
// need to read in events array from json file
//takes in one prop = events
const Timeline = (props) => {
  
  const eventComponents = props.events.map((event, i) => {
    return (
      <li key={i}>
      < TimelineEvent 
      person={event.person}
      status={event.status}
      timeStamp={event.timeStamp} 
      />
      </li>

    )
  }
  )
  return (
  <section>
    <ul>{eventComponents}</ul>
  </section>
  )
}

export default Timeline;