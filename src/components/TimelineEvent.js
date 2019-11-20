import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

const TimelineEvent = props => {
  let currentTime = Timestamp(Date.now());

  return (
    <div>
      <p>{props.person}</p>
      <p>{props.status}</p>
      <p>{currentTime}</p>
    </div>
  );
};

export default TimelineEvent;
