import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

import Node_emoji from 'node-emoji'
import Emoji from './Emoji';

const TimelineEvent = (event) => {
  // props is passed in via line 14 in Timeline.js, use it to make new new TimelineEvent Component obj
  // timestamp is sent off to Timestamp Component for processing
  const timestamp = <Timestamp time={event.timeStamp} />;
  const person = event.person;
  const status = event.status;

  let grinCount = () => {
    console.log("ok");
    
  };


  // Take passed in data and make bulleted list JSX.  this is going back to Timeline.js, then App.js
  return(
    <section className="single_post">

      <section className="top_line">
        <section className="person">{person}</section>
        <section className="timeStamp">{timestamp}</section>
      </section>

      <section className="status">{status}</section>

      <section className="emojis_parent_container">
        <section></section>
        
        <Emoji iconName="grinning"/>

        <Emoji iconName="neutral_face"/>

        <Emoji iconName="rage"/>
        
      </section>

    </section>
  );
}

export default TimelineEvent;