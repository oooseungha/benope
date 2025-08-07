// ------------------------ React
import React from 'react'


// ------------------------ Router
import { Link, Outlet, useLocation } from 'react-router-dom';


// ------------------------ Styled-Components
import styled from 'styled-components';
import { TitleDiv } from '../../components/StyledComponent'

const EventTab = styled.ul`
  width: 1048px;
  margin: 0 auto 50px auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px dotted #999;
  padding-bottom: 50px;
  li:first-child {
    margin: 0 10px 0 -30px ;
  }
`

const EventContent = styled.li`
  width: 110px; height: 40px;
  font-size: 20px;
  line-height: 40px;
  background-color: ${({ active }) => active ? '#FC4C02' : '#ccc'};
  text-align: center;
  border-radius: 10px;
  p {
    color: #fafaf8;
    font-weight: ${({active}) => active ? 500 : 400};
  }
  &:hover {
    background-color: #FC4C02;
    p {
      font-weight: 500;
    }
  }
`

export default function SubEvent() {

  const location = useLocation();
  const path = location.pathname;

  return (
    <div style={{width: '1048px', margin: '100px auto'}}>

      <TitleDiv>
        <p>이벤트</p>
      </TitleDiv>

      <EventTab>
        <EventContent active={path.includes('/sub/event/now')}>
          <Link to='/sub/event/now'><p>진행 이벤트</p></Link>
        </EventContent>
        <EventContent active={path.includes('/sub/event/past')}>
          <Link to='/sub/event/past'><p>종료 이벤트</p></Link>
        </EventContent>
      </EventTab>

      <Outlet />

    </div>
  )
}
