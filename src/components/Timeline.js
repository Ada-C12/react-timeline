import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

const eventComponents = props.events.map((event, i) => {

  return (
    <div className="timeline" key={i}>
    <TimelineEvent person={event.person} status={event.status} timestamp={event.timeStamp} />
    </div>
  );
});

return eventComponents;
}
export default Timeline;
