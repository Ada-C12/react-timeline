import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

props.events.map((event, i) => {

  return (
    <div key={i}>
    <TimelineEvent person={event.person} status={event.status} timestamp={event.timeStamp} />
    </div>
  );
});
}
export default Timeline;
