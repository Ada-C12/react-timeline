import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return(
    <section>
      <p>Person = {props.person}</p>
      <p>Status =  {props.status}</p>
      <p>TimeStamp = <Timestamp timeStamp={props.timeStamp}/></p>
    </section>
  );
};

export default TimelineEvent;
