import React from "react";
import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = props => {
  const printEvents = props.events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent
          person={event.person}
          status={event.status}
          timeStamp={event.timeStamp}
        />
      </li>
    );
  });

  return (
    <ul className="timeline-events">
      <li>{printEvents}</li>
    </ul>
  );
};

export default Timeline;
