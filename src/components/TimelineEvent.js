import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <section>
      <h3>ONE EVENT</h3>
      <p>This event on <Timestamp/>: {props.person} -- {props.status}</p>
    </section>
  )
}

export default TimelineEvent;