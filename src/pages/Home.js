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
    </div>
  )
}
