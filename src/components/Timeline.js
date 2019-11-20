import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import timeline from '../data/timeline'

const Timeline = () => {
  const timelineComponents = timeline["events"].map((data, i) => {
    return(
      <TimelineEvent 
        person={data.person}
        status={data.status}
        timestamp={data.timeStamp}
        />

    )
  })
  return(
    <section className="timeline"> 

    <p> {timelineComponents} </p>
    

    
    
    </section>
  );
}

export default Timeline;