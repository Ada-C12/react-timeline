import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (event) => {
  // props is passed in via line 14 in Timeline.js, use it to make new new TimelineEvent Component obj
  // timestamp is sent off to Timestamp Component for processing
  const timestamp = <Timestamp time={event.timeStamp} />;
  const person = event.person;
  const status = event.status;

  // Take passed in data and make bulleted list JSX.  this is going back to Timeline.js, then App.js
  return(
    <section className="single_post">

      <section className="top_line">
        <section className="person">{person}</section>
        <section className="timeStamp">{timestamp}</section>
      </section>

      <section className="status">{status}</section>

      <section className="emojis_parent_container">
        
        <section className="emoji_with_counter"> 
          <section className = "emoji">:-)</section>
          <section className = "counter">counter</section>
        </section>

        <section className="emoji_with_counter"> 
          <section className = "emoji">:-|</section>
          <section className = "counter">counter</section>
        </section>

        <section className="emoji_with_counter"> 
          <section className = "emoji">:-(</section>
          <section className = "counter">counter</section>
        </section>
      </section>

    </section>
  );
}

export default TimelineEvent;