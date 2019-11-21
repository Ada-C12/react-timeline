import React from 'react';
import moment from 'moment';

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const relative = time.fromNow();

  return (
    <section>
    <ul>
      <li><span title={absolute}>{relative}</span></li>
      <li>{ props.event.person }</li>
      <li>{ props.event.status }</li>
      <li>{ props.event.timeStamp }</li>
    </ul>
  </section>
    
  );
};

export default Timestamp;