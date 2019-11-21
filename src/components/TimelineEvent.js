import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section className="Tweet">
      <div className="tweetHeader">
        <h1>{ props.person }</h1>
        <h3 className="Date"><Timestamp time={props.timeStamp}/></h3>
      </div>
      <p>{ props.status }</p>
    </section>
  );
};

export default TimelineEvent;