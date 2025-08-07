// ------------------------ React
import React, { useState } from 'react'

// ------------------------ Data
import { event } from './eventData';

// ------------------------ Styled-Components
import styled from 'styled-components';
import { EventWrap } from '../../../components/StyledComponent';


export default function PastEvent() {
  
  const [pastEvent] = useState(event.filter(item => item.eventCategory.includes('past')));

  return (
    <div>
      <EventWrap key={event.eventId}>
        {
          pastEvent.map((event, index) => {
            return (
              <div className='event_box'>
                <div className='event_img'
                  style={{
                    backgroundImage: `url(${event.eventThumbnail})`
                  }}
                />
                <div className='event_info'>
                  <p>{event.eventTitle}</p>
                  <p>{event.eventDate}</p>
                </div>
              </div>
            )
          })
        }
      </EventWrap>
    </div>
  )
}
