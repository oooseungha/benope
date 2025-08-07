import React from 'react'

// ------------------------ Router
import { Link, useNavigate, useParams } from 'react-router-dom';


// ------------------------ 외부 라이브러리
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronRight } from '@fortawesome/free-solid-svg-icons';


// ------------------------ Styled-Components
import styled from 'styled-components';
import { TitleDiv, CartButton, ContentBox } from '../../components/StyledComponent'

const Button = styled.button`
  display: block;
  width: 250px;
  margin: 50px auto 0 auto;
  height: 50px;
  letter-spacing: -1px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fafaf8;
  &:hover {
    color: #FC4C02;
  }
`

const AboutWrap = styled.section`
  width: 838px;
  margin: 100px auto;
  padding-bottom: 50px;
  .about_info_box {
    width: 480px;
    margin: 0 auto 50px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .about_info_img {
      margin-right: 10px;
    }
    p {
      font-size: 32px;
      color: #FC4C02;
      line-height: 30px;
      font-weight: bold;
    }
    span {
      line-height: 30px;
    }
  }
  .about_box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .about_img { 
      margin-right: 10px;
    }
    p {
      font-size: 16px;
      line-height: 16px;
    }
    .about_title {
      width: 538px;
      font-size: 32px;
      font-weight: bold;
      line-height: 50px;
      border-bottom: 3px solid #FC4C02;
    }
  }
`



export default function SubBrandInfo() {
  
  const navigate = useNavigate();

  return (
    <div>
      <AboutWrap>
        <TitleDiv>
          <p>브랜드 소개</p>
        </TitleDiv>

        <div style={{width: '185px', height: '49px', margin: '0 auto 30px auto'}}>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='브랜드 로고' />
        </div>

        <div className='about_info_box'>
          <div className='about_info_img'><img src={process.env.PUBLIC_URL + '/images/about_01.png'} /></div>
          <div>
            <p>환상적인 맛은 기본,</p>
            <p>영양 성분까지 완벽</p>
            <br />
            <br />
            <span>뒷면의 영양성분까지 만족스러운 간식</span>
            <br />
            <span>맛있어서 계속 생각나는 진짜 ‘맛있는’ 간식</span>
          </div>
        </div>

        <div className='about_box'>
          <div className='about_img' style={{width: '300px'}}><img src={process.env.PUBLIC_URL + '/images/about_02.jpg'} /></div>
          <div>
            <p className='about_title'>해썹(HACCP) 자체 생산 시설 운영</p>
            <p>외주 업체에 생산을 맡기는 타 브랜드들과 달리</p>
            <p>모든 제품을 베노프 생산 시설에서 만들고 있습니다.</p>
            <p>덕분에 상상한 맛과 식감을 100% 구현하고 있습니다.</p>
          </div>
        </div>
        <div className='about_box'>
          <div className='about_img'><img src={process.env.PUBLIC_URL + '/images/about_03.jpg'} /></div>
          <div>
            <p className='about_title'>고단백 스낵부터 ZERO 디저트까지</p>
            <p>무려 6년 동안 1000회 이상의 레시피 테스트를 통해 선정한</p>
            <p>최상의 맛을 자신 있게 소개 드립니다.</p>
            <p>베노프 만의 다양한 맛을 만나 보세요.</p>
          </div>
        </div>
        <div className='about_box'>
          <div className='about_img'><img src={process.env.PUBLIC_URL + '/images/about_04.jpg'} /></div>
          <div>
            <p className='about_title'>건강 디저트 천국, 미국 시장 진출 성공</p>
            <p>오픈한 지 한 달 만에 1차 재고가 모두 완판,</p>
            <p>국내 단백질바 최초로 ‘Amazon's Choice’에 선정됐습니다.</p>
            <p>견고한 해외 시장에서도 인정받은 만큼 마음 놓고 즐겨 주세요.</p>
          </div>
        </div>

        <Button onClick={() => {navigate('/sub/all')}}>
          베노프 전제품 보러 가기
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </AboutWrap>
    </div>
  )
}
