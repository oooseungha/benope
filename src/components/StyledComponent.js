import React from 'react'
import styled from 'styled-components';

// ------------------------ src_images
import arrowLeft from '../images/arrow_left.png';
import arrowLeftHover from '../images/arrow_left_hover.png';
import arrowLeftDisabled from '../images/arrow_left_disabled.png';
import arrowRight from '../images/arrow_right.png';
import arrowRightHover from '../images/arrow_right_hover.png';
import XBtn from '../images/x_btn.png';


export const TitleDiv = styled.div`
  width: 500px;
  margin: 0 auto 30px auto;
  text-align: center;
  p {
    font-size: 28px;
    font-family: "Jua", sans-serif;
    display: inline-block;
    border-bottom: 2px solid #FC4C02;
  }
`;

export const CartButton = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  letter-spacing: -1px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fafaf8;
  margin: 20px 0;
  &:hover {
    color: #FC4C02;
  }
`;

export const ContentBox = styled.div `
  overflow: hidden;
  .title {
    display: block;
    width: 230px; height: 40px;
    line-height: 40px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price {
    float: right;
    font-size: 24px;
    font-weight: 500;
  }
  .sale_title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .sale_percent {
    font-family: "Jua", sans-serif;
    font-size: 32px;
    color: #FC4C02;
    padding-right: 10px;
  }
  .sale_price {
    font-size: 28px;
    font-weight: 500;
    padding-right: 10px;
  }
  .sale_before_price {
    font-size: 20px;
    color: #666;
    text-decoration-line: line-through;
  }

  &:hover .title {
    text-decoration: underline 2px #FC4C02;
    text-underline-offset: 6px;
    font-weight: 500;
  }
  &:hover .sale_title {
    color: #FC4C02;
    font-weight: 500;
  }
`

export const ArrowLeft = styled.button`
  width: 28px; height: 28px;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  background-image: ${({disabled}) => disabled ? `url(${arrowLeftDisabled})` : `url(${arrowLeft})`};
  background-size: conatin;
  border: none;
  &:hover {
    background-image: ${({disabled}) => disabled ? `url(${arrowLeftDisabled})` : `url(${arrowLeftHover})`};
  }
`

export const ArrowRight = styled.button`
  width: 28px; height: 28px;
  background-image: url(${arrowRight});
  background-size: conatin;
  border: none;
  &:hover {
    background-image: url(${arrowRightHover})
  }
`

export const Xbtn = styled.button`
  width: 15px; height: 15px;
  background-image: url(${XBtn});
  background-size: cover;
  background-color: unset;
  border: none;
`