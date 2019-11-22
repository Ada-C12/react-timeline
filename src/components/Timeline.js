import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

const timeLine = (props.messages.events).map((event, i) => {
  return (
    <div class="timeline">
    <p key={i}>
      <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/>
    </p>
    </div>
  );
});

  return (
    timeLine
  );
}

export default Timeline;
