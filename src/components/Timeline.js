import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import Timestamp from './Timestamp';


const Timeline = (props) => {

  return (
    <div>
      <Timestamp event={props.events[0]}/>
      <Timestamp event={props.events[1]}/>
    </div>
);
};

export default Timeline;


  
