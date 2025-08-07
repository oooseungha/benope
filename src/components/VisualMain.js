// ------------------------ React
import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

// ------------------------ Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


// ------------------------ Styled-Components
import styled from 'styled-components';

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


export default function VisualMain() {


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
          <SwiperSlide>
            <Link to={`details/products/all08`}><img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} /></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`details/products/all12`}><img src={process.env.PUBLIC_URL + '/images/visual_main_02.jpg'} /></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`details/products/all16`}><img src={process.env.PUBLIC_URL + '/images/visual_main_03.jpg'} /></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`details/products/all16`}><img src={process.env.PUBLIC_URL + '/images/visual_main_04.jpg'} /></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`details/products/all07`}><img src={process.env.PUBLIC_URL + '/images/visual_main_05.jpg'} /></Link>
          </SwiperSlide>
        </Swiper>
      </>
    </VisualMainWrap>
  )
}
