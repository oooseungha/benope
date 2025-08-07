// ------------------------ React
import React, { useState } from 'react';


// ------------------------ Router
import { Link, useNavigate, useParams } from 'react-router-dom';


// ------------------------ Redux
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice.js';


// ------------------------ 외부 라이브러리
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';


// ------------------------ CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


// ------------------------ Data & Components
import { bests, sales, mainReviews } from '../data/mainData.js';
import VisualMain from '../components/VisualMain';
import Timer from '../components/Timer.js';


// ------------------------ Styled-Components
import styled from 'styled-components';
import { TitleDiv, CartButton, ContentBox } from '../components/StyledComponent.js'

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
const SaleOuter = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 70px 0 30px 0;
  .sale_info {
    width: 1048px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .saleTitle01, .saleTitle02 {
      font-family: "Jua", sans-serif;
      font-size: 32px;
    }
    .saleTitle02 {
      padding-left: 10px;
      font-size: 46px;
      color: #FC4C02;
    }
    .saleText {
      line-height: 10px;
    }
  }
`
const ReviewWrap = styled.div `
  padding: 50px 0;
  .review_box {
    position: relative;
  }
  .review_title_box {
    width: 200px; height: 25px;
    margin-bottom: 10px;
    p {
      font-size: 18px;
      font-weight: 500;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .review_btn {
    width: 200px;
    position: absolute;
    left: 0; bottom: -90px;
  }
`

const AboutWrap = styled.section`
  width: 838px;
  margin: 100px auto;
  padding-bottom: 50px;
  border-bottom: 3px solid #999;
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




export default function Home() {

  const [bestData] = useState(bests);
  const [saleData] = useState(sales);
  const [reviewData] = useState(mainReviews);
  const navigate = useNavigate();
  const notify = () => toast("장바구니에 추가되었습니다.");

  const dispatch = useDispatch();

  return (
    <div>
      
      <VisualMain />

      {/* ----- best ----- */}
      <Container style={{width: '1048px', margin: '100px auto'}}>
        <TitleDiv>
          <p>베스트 상품</p>
        </TitleDiv>
        <Row
          style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}
        >
          {
            bestData.map((best, index) => {
              return (
                <Col key={best.id} style={{padding: 0, margin: 0}}>
                  <ContentBox>
                    <Link to={`details/bests/${best.id}`}>
                      <img src={best.image} style={{width: '342px', marginBottom: '10px'}} />
                      <span className='title'>{best.title}</span>
                      <span className='price'>{best.price.toLocaleString() + '원'}</span>
                    </Link>
                  </ContentBox>
                  <CartButton
                    onClick={() => {
                      notify();
                      dispatch(addItem({
                        id: best.id, 
                        title: best.title, 
                        image: best.image,
                        count: 1,
                        price: best.price,
                      }))
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} style={{paddingRight: '5px'}} />
                    장바구니에 담기
                  </CartButton>
                </Col>
              )
            })
          }
        </Row>
      </Container>


      {/* ----- sale ----- */}
      <SaleOuter>
        <div className='sale_info' style={{marginBottom: '50px'}}>
          <div style={{width: '412px', marginRight: '60px'}}><img src={process.env.PUBLIC_URL + '/images/sale.png'} alt='세일 탭 소개 이미지' /></div>
          <div>
            <span className='saleTitle01'>Be Not Patient</span>
            <span className='saleTitle02'>Benope</span>
            <p>건강하기 위해 참아야 했던 많은 순간들, 베노프에서는 더 이상 참지 않아도 돼요!</p>
            <br />
            <p className='saleText'>입안 가득 즐거운 순간</p>
            <p className='saleText'>식사 후 밀려오는 죄책감과 후회는 이제 그만!</p>
            <p className='saleText' 
              style={{fontWeight: 500, textDecoration: 'underline dotted 1px #FC4C02', textUnderlineOffset: '6px'}}
            >
              먹기 전의 설렘과 행복이 사라지지 않는 베노프의 추천 제품을 만나 보세요.
            </p>
          </div>
        </div>

        <div>
          <TitleDiv style={{marginBottom: '10px'}}>
            <p>최대 35% 할인 세트 상품 </p>
          </TitleDiv>
          <Timer className='timer' saleTime={"2025-12-31T23:59:59"} />
        </div>

        <Container style={{width: '1048px', margin: '30px auto'}}>
          <Row
            style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}
          >
            {
              saleData.map((sale, index) => {
                return (
                  <Col key={sale.id} style={{padding: 0, margin: 0}}>
                    <ContentBox>
                      <Link to={`/details/sales/${sale.id}`}>
                      {/* ★★★★★★★★ */}
                        <img src={sale.image} style={{width: '342px', marginBottom: '10px'}} />
                        <p className='sale_title'>{sale.title}</p>
                        <span className='sale_percent'>{sale.percent}</span>
                        <span className='sale_price'>{sale.price.toLocaleString() + '원'}</span>
                        <span className='sale_before_price'>{sale.beforePrice.toLocaleString() + '원'}</span>
                      </Link>
                    </ContentBox>
                    <CartButton
                      onClick={() => {
                        notify();
                        dispatch(addItem({
                          id: sale.id, 
                          title: sale.title, 
                          image: sale.image,
                          count: 1,
                          price: sale.price,
                        }))
                      }}
                    >
                      <FontAwesomeIcon icon={faCartShopping} style={{paddingRight: '5px'}} />
                      장바구니에 담기
                    </CartButton>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </SaleOuter>


      {/* ----- review ----- */}
      <ReviewWrap>
        <TitleDiv>
          <p>베스트 리뷰</p>
        </TitleDiv>

        <Container style={{width: '1048px', margin: '30px auto'}}>
          <Row
            style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}
          >
            {
              reviewData.map((review, index) => {
                return (
                  <Col className='review_box' key={review.id} style={{padding: 0, margin: 0}}>
                    <ContentBox>
                      <Link to={`details/reviews/${review.id}`}>
                        <img src={review.image} style={{width: '200px', marginBottom: '10px'}} />
                        <div className='review_title_box'>
                          <p>{review.title}</p>
                        </div>
                        <span className='review_text'>{review.text}</span>
                      </Link>
                    </ContentBox>
                    <CartButton
                      className='review_btn'
                      onClick={() => {navigate(`/details/reviews/${review.id}`)}}
                    >
                      제품 보러 가기
                    </CartButton>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </ReviewWrap>


      {/* ----- about ----- */}
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

        <Button onClick={() => {navigate('sub/all')}}>
          베노프 전제품 보러 가기
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </AboutWrap>
    </div>
  )
}
