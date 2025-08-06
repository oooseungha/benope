import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


export default function VisualMain() {

  const VisualMainWrap = styled.div`
    width: 1280px;
    height: 500px;
    margin: 0 auto;
    cursor: pointer;
    .swiper-pagination-bullet {
      width: 15px; height: 15px;
    }
    .swiper-pagination-bullet-active {
      background-color: #FC4C02;
    }
  `

  return (
    <VisualMainWrap>
      <>
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/visual_main_02.jpg'} /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/visual_main_03.jpg'} /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/visual_main_04.jpg'} /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/visual_main_05.jpg'} /></SwiperSlide>
        </Swiper>
      </>
    </VisualMainWrap>
  )
}
