import React from "react";
import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = props => {
  return (
    <section>
      <section className="timeline">{props.events}</section>
    </section>
  );
};
export default Timeline;
