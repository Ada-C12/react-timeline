import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // const allEvents = {
  //   for (let i = 0; i < props.length; i += 1) {
  //     return(
  //       <section key={i}>
  //       <li>
  //         <TimelineEvent person={ props[i].person } status={props[i].status } timestamp={ props[i].timeStamp } />
  //       </li>
  //     </section>
  //     );
  //   };
  // }

  const allEvents = props.events.map((event, i) => {
    return (
      // each child in a list must have a unique key
      <section key={i}>
        <li>
          <TimelineEvent person={ event.person } status={event.status } timestamp={ event.timeStamp } />
        </li>
      </section>
    );
  });

  return (
    <section>
      <ul>
          {allEvents}
      </ul>
    </section>
  )
}

export default Timeline;