import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

const TimelineEvent = props => {
  return (
    <div className="singleTimelineEvent">
      <h3>{props.person}</h3>
      <p className="timeStamp">{Timestamp(props.timeStamp)}</p>
      <p className="status">{props.status}</p>
    </div>
  );
};

export default TimelineEvent;
