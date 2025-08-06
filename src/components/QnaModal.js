import React, { useState } from 'react'
import styled from 'styled-components';

import XButton from '../images/x_button.png';


export default function QnaModal({ open, close }) {
  if (!open) return null;

  const QnaWrap = styled.div`
    width: 100%; height: 100vh;
    position: fixed;
    top: 0; left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;

    .qna_box{
      width: 500px; height: 700px;
      margin: 100px auto 0 auto;
      background-color: #fafaf8;
      border-radius: 30px;
      .qna_title_box {
        background-color: #FC4C02;
        display: flex;
        justify-content: space-between;
        padding: 30px 20px 20px 20px;
        border-radius: 30px 30px 0 0;
        .title_box { 
          width: 450px;
          text-align: center;
          padding-left: 20px;
          font-size: 24px;
          font-family: "Jua", sans-serif;
          color: #fafaf8;
        }
        .x_btn_box {
          width: 30px;
          cursor: pointer;
        }
      }
      .qna_chat_box {
        height: 470px;
        margin: 20px;
        padding: 10px;
        > div {
          width: 300px;
          background-color: #ccc;
          border-radius: 10px;
          padding: 10px;
          line-height: 20px;
        }
      }
      .qna_input_box {
        height: 90px;
        margin: 20px;
        display: flex;
        textarea {
          width: 380px; height: 90px;
          margin-right: 10px;
          border: 1px solid #ccc;
          resize: none;
          letter-spacing: -1px;
          padding: 10px;
        }
        button {
          width: 70px; height: 90px;
          border: none;
          background-color: #FC4C02;
          color: white;
          font-weight: bold;
          border-radius: 10px;
        }
      }
    }
  `

  return (
    <div>
      <QnaWrap>
        <div className='qna_box'>
          <div className='qna_title_box'>
            <div className='title_box'>1:1 상담 문의</div>
            <div
              className='x_btn_box'
              onClick={close}
            >
              <img src={XButton} alt='닫기 버튼' />
            </div>
          </div>

          <div className='qna_chat_box'>
            <div>
              <h3>베노프에 문의하기</h3>
              <p>안녕하세요, 고객님! 여러분과 맛있는 여정을 함께 할 베노프입니다😋</p>
              <p>고객센터 운영시간: 평일 09:00 ~ 18:00</p>
              <p>(점심시간: 13:00 ~ 14:00)</p>
            </div>
          </div>

          <div className='qna_input_box'>
            <textarea placeholder="문의 내용을 작성해 주세요!"></textarea>
            <button>전송</button>
          </div>

        </div>

      </QnaWrap>
      
    </div>
  )
}
