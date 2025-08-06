// ------------------------ React
import React, { useState, useEffect } from 'react';


// ------------------------ 외부 라이브러리
import styled from 'styled-components';


export default function Timer({ saleTime }) {

  // @@@@ Timer @@@@
  const TimeCountdown = () => {
    const difference = new Date(saleTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(TimeCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(TimeCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, [saleTime]);

  
  // @@@@ styled-components @@@@
  const TimerBox = styled.div `
    width: 300px; height: 40px;
    margin: 0 auto;
    background-color: #FC4C02;
    color: #fafaf8;
    font-family: "Jua", sans-serif;
    font-size: 24px;
    text-align: center;
    line-height: 45px;
    border-radius: 10px;
  `


  return (
    <TimerBox>
      {timeLeft.days !== undefined ? (
        <p>
          {timeLeft.days}일 {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')} 남음
        </p>
      ) : (
        <p>기간이 종료되었습니다.</p>
      )}
    </TimerBox>
  )
}
