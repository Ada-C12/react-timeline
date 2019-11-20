import React from "react";
import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = (props) => {
  return (
    <div >
      {props.events}
    </div>
    )
};
export default Timeline;
