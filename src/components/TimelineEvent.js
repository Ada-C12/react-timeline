import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

const TimelineEvent = props => {
  return (
    <section className="timeline-event">
      <h2 className="event-person">{props.person}</h2>
      <p className="event-time">
        <Timestamp time={props.time} />
      </p>
      <p className="event-status">{props.status}</p>
    </section>
  );
};

export default TimelineEvent;
