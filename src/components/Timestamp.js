import React from 'react';
import moment from 'moment';

// This parses through time data based on moment. It returns a span with a number and a relative label to give us "2" "years ago" (from today) and to have that be accurate

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const relative = time.fromNow();

  return (
    <span title={absolute}>{relative}</span>
  );
};

export default Timestamp;