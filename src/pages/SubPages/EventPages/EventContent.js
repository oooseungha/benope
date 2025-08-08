// ------------------------ React
import React from 'react'

// ------------------------ Router
import { useParams, Link } from 'react-router-dom';

// ------------------------ Styled-Components
import styled from 'styled-components';

const EventWrap = styled.div`
  .event_title_box {
    text-align: center;
    margin-bottom: 50px;
    padding-bottom: 50px;
    border-bottom: 1px dotted #999;
    span {
      color: #999;
    }
  }
`

export default function EventContent({ eventData }) {

  const { eventId } = useParams();
  const findEvent = eventData.find(event => event.eventId === eventId);

  return (
    <EventWrap>
      <div className='event_title_box'>
        <h2>{findEvent.eventTitle}</h2>
        <span>{findEvent.eventDate}</span>
      </div>
      <div><img src={findEvent.eventImg} /></div>
    </EventWrap>
  )
}
