// ------------------------ React
import React, { useState } from 'react'

// ------------------------ Router
import { Link } from 'react-router-dom';

// ------------------------ Data
import { event } from './eventData';

// ------------------------ Styled-Components
import styled from 'styled-components';
import { EventWrap } from '../../../components/StyledComponent';


export default function NowEvent() {

  const [nowEvent] = useState(event.filter(item => item.eventCategory.includes('now')));

  return (
    <div>
      <EventWrap key={event.eventId}>
        {
          nowEvent.map((event, index) => {
            return (

              <Link to={`/sub/event/${event.eventId}`}>
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
              </Link>

            )
          })
        }
      </EventWrap>
    </div>
  )
}
