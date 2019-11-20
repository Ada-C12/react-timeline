import React from 'react';
import './Timeline.css';
// import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  return (
    // <TimelineEvent person="Mamma Mia" status="heyyy!! it me!" time="2018-05-18T22:12:03Z"/>
    <div className="timeline">
      {props.events}
    </div>
    )
}

export default Timeline;
