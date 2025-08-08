// ------------------------ React
import React, { useState }  from 'react';


// ------------------------ Router
import { Link } from 'react-router-dom';


// ------------------------ Components
import QnaModal from '../components/QnaModal.js';


// ------------------------ 외부 라이브러리
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


// ------------------------ Styled-Component
import styled from 'styled-components';

const SnsWrap = styled.div `
  width: 1084px;
  margin: 150px auto 50px auto;
  text-align: center;
  .sns_span {
    color: #FC4C02;
    font-weight: bold;
  }
  .sns_zone {
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 20px auto 0 auto;
    div {
      width: 42.5px;
      cursor: pointer;
    }
  }
`
const FooterTitleBox = styled.div `
  height: 50px;
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
  span {
    font-size: 32px;
  }
  .footer_title {
    font-family: "Jua", sans-serif;
    margin-right: 10px;
  }
`

const FooterNav = styled.div `
  display: flex;
  justify-content: space-between;
  > div {
    width: calc(50% - 5px);
    .cs_center {
      padding-top: 10px;
      margin-bottom: 45px;
      p {
        font-size: 14px;
        line-height: 10px;
        color: #666;
      }
    } // cs_center

    .footer_btn_box {
      display: flex;
      justify-content: space-between;
      button {
        display: block;
        width: calc(50% - 5px);
        height: 50px;
        letter-spacing: -1px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #fafaf8;
        box-sizing: border-box;
        &:hover {
          color: #FC4C02;
        }
      }
    } // footer_btn_box 
  }
  .footer_bored_box {
    .footer_bored > div {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      span {
        font-size: 14px;
        color: #666;
      }
      &:hover {
        font-weight: bold;
        cursor: pointer;
      }
    }
  } // footer_bored_box
`

const FooterOuter = styled.div `
  width: 100%;
  background-color: #eee;
  padding: 50px 0;
  span {
    font-size: 14px;
    color: #666;
  }
  .footer_info {
    margin-bottom: 20px;
  }
  .footer_info_btn {
  &:hover {
    text-decoration: underline 1px;
    text-underline-offset: 3px;
    cursor: pointer;
  }
  }
`
const TopBtn = styled.button`
  display: block;
  width: 60px; height: 60px;
  border: none;
  background-image: url(${process.env.PUBLIC_URL + '/images/top_btn.png'});
  background-color: unset;
  position: fixed;
  right: 30px; bottom: 30px;
`


export default function Footer() {

  // qna_modal
  const [ openQna, setOpenQna ] = useState(false);

  return (
    <div>
      <footer>
        <section style={{width: '1084px', margin: '0 auto 50px auto'}}>
          <SnsWrap>
            <div className='sns_text'>
              <span>다양한 SNS 채널에서 </span>
              <span className='sns_span'>베노프</span>
              <span>를 만나 보세요!</span>
            </div>

            <div className='sns_zone'>
              <div><img src={process.env.PUBLIC_URL + '/images/sns_01.png'} /></div>
              <div><img src={process.env.PUBLIC_URL + '/images/sns_02.png'} /></div>
              <div><img src={process.env.PUBLIC_URL + '/images/sns_03.png'} /></div>
              <div><img src={process.env.PUBLIC_URL + '/images/sns_04.png'} /></div>
            </div>
          </SnsWrap>

          <FooterNav>
            <div>
              <FooterTitleBox>
                <span className='footer_title'>고객센터</span>
                <span>010-4110-2175</span>
              </FooterTitleBox>
              <div className='cs_center'>
                <p>운영시간: 평일 09:00 ~ 18:00 (점심시간 13:00 ~ 14:00)</p>
                <p>이메일 sara2175@naver.com</p>
                <p>팩스 00-0000-0000</p>
              </div>
              <div className='footer_btn_box'>
                <button
                  onClick={() => setOpenQna(true)}
                >
                  1:1문의
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button>
                  주문 / 배송조회
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>

            <div className='footer_bored_box'>
              <FooterTitleBox>
                <span className='footer_title'>커뮤니티</span>
              </FooterTitleBox>
              <div className='footer_bored'>
                <div>
                  <span>[EVENT] 단백질바 Light 런칭기념 EVENT</span>
                  <span>2025/07/31</span>
                </div>
              </div>
              <div className='footer_bored'>
                <div>
                  <span>🤩 100% 당첨 복주머니 이벤트 🤩</span>
                  <span>2025/07/13</span>
                </div>
              </div>
              <div className='footer_bored'>
                <div>
                  <span>단백질쉐이크 이달의 구매왕 🏆 (당첨자발표)</span>
                  <span>2025/05/31</span>
                </div>
              </div>
              <div className='footer_bored'>
                <div>
                  <span>베노프 X 지그재그 뷰티 페스타 🎡</span>
                  <span>2025/05/01</span>
                </div>
              </div>
            </div>

          </FooterNav>
        </section>

        <FooterOuter>
          <div style={{width: '1048px', margin: '0 auto'}}>
            <div className='footer_info'>
              <span>㈜베노프 | </span>
              <span>대표 오승하 | </span>
              <span>부산광역시 부산진구 중앙대로 688 한준빌딩 2층 | </span>
              <span>사업자등록번호 000-00-00000 </span>
              <span className='footer_info_btn'>(사업자 정보 확인)</span>
            </div>
            <div className='footer_info'>
              <span>고객님은 안전거래를 위해 현금 결제 시, 베노프에서 가입한 소비자피해보상보험 서비스를 이용하실 수 있습니다.</span>
              <br />
              <span>보상대상: 미배송/반품, 환불 거부/쇼핑몰 부도 </span>
              <span className='footer_info_btn'>(서비스 가입 사실 확인)</span>
            </div>
            <div>
              <span>COPYRIGHT ⓒ 2025 Benope Corp. All rights reserved.</span>
              <br />
              <span style={{fontWeight: 'bold', color: '#999'}}>상업적 용도가 아닌 입사용 포트폴리오로만 활용하겠습니다.</span>
            </div>
          </div>
        </FooterOuter>
      </footer>

      <QnaModal
        open={openQna}
        // open으로 열리면 openQna값이 true 됨
        close={() => setOpenQna(false)}
        // setOpenQna 함수 호출해서 false 값을 돌려서 끔
      />

      <TopBtn onClick={() => {window.scrollTo(0,0)}}/>
    </div>
  )
}
