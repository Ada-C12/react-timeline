import React from 'react';
import './Timeline.css';
import timeline from '../data/timeline'
import TimelineEvent from './TimelineEvent';

const Timeline = () => {
const timelineComponents = timeline.events.map((mediaPost,i)=> {
return(
  <TimelineEvent 
    person={mediaPost.person}
    status={mediaPost.status}
    timestamp={mediaPost.timestamp}
  />
)

  })
  return(
    <section className="timeline">
      <p> {timelineComponents}</p>

    </section>
  );
}

export default Timeline;