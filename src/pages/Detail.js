// ------------------------ React
import React, { useState, useEffect } from 'react';


// ------------------------ Router
import { useParams } from 'react-router-dom';


// ------------------------ Redux & slice
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount, decrementByAmount, setCount } from '../redux/counterSlice.js';
import { addItem } from '../redux/cartSlice.js';


// ------------------------ Data & Components
import QnaModal from '../components/QnaModal.js';
import { bests, sales, reviews, products } from '../data/subData.js';


// ------------------------ 외부 라이브러리
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

// ------------------------ Styled-Component
import styled from 'styled-components';
import { CartButton, ArrowLeft, ArrowRight, Xbtn } from '../components/StyledComponent.js'

const DetailWrap = styled.div`
  width: 1048px;
  margin: 120px auto 80px auto;
  display: flex;
  gap: 10px;
  .detail_img_box {
  }
  .detail_info_box {
    .detail_info {
      .detail_title {
        width: 548px;
        p {
          font-family: "Jua", sans-serif;
          font-size: 32px;
          line-height: 30px;
        }
      }
      .detail_percent {
        font-family: "Jua", sans-serif;
        font-size: 40px;
        color: #FC4C02;
      }
    }
    .detail_price_box {
      display: flex;
      gap: 10px;
      margin: 20px 0;
      border-bottom: 1px solid #999;
      .detail_price {
        font-size: 36px;
        font-weight: bold;
        line-height: 48px;
      }
      .detail_before_price {
        font-size: 26px;
        color: #999;
        text-decoration-line: line-through;
        line-height: 48px;
      }
    }
    .detail_option_box {
      select {
        width: 100%;
        font-size: 14px;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid #eee;
        margin-bottom: 40px;
      }
      .detail_amount_box,
      .detail_last_price {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .detail_amount_box {
        height: 50px;
        font-size: 20px;
        margin-bottom: 40px;
        .flavor {
          color: #666;
          font-size: 16px;
          width: 200px; height: 30px;
          padding-top: 10px;
        }
        .detail_amount {
          width: 150px; height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
          font-size: 28px;
          font-weight: 500;
          padding-top: 10px;
          }
        } // detail_amount_box
      } // detail_option_box
    }
  }
`

const DetailTab = styled.ul`
  width: 1048px;
  margin: 20px auto;
  display: flex;
  background-color: #eee;
  li {
    flex: 1;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    cursor: pointer;
    box-sizing: border-box;
    p {
      font-size: 18px;
      line-height: 70px;
      padding-top: 15px;    
    }
    &:hover {
      font-weight: bold;
    }
  }
  li:first-child {
    margin-left: -30px;
  }
  li:nth-child(2) {
    border-left: 1px solid #999;
    border-right: 1px solid #999;
  }
`;


const DetailContent = styled.div`
  width: 1048px;
  margin: 0 auto 150px auto;
  padding-bottom: 150px;
  border-bottom: 1px solid #ccc;
`

const DetailReview = styled.div`
  width: 1048px;
  margin: 0 auto;
  padding-top: 30px;
  li {
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    position: relative;
    margin-left: -30px;
    margin: 0 0 30px -30px;
    .review_img {
      width: 400px; height: 250px;
      background-color: #ccc;
      float: left;
      margin: 0 10px 30px 0;
    }
    .review_text_box {
      .review_title {
        font-size: 28px;
        font-weight: 500;
      }
      .review_subtext {
        color: #666;
      }
      .review_date {
        font-size: 14px;
        color: #999;
        float: right;
        position: absolute;
        right: 30px;
        bottom: 10px;
      }
    }
  }
`

export default function Detail({ allData }) {

  // toast_popup
  const notify = () => toast("장바구니에 추가되었습니다.");


  // detail_page_data
  const { category, id } = useParams();
  const dataList = allData[category] || [];

  const findItem = dataList.find(item => item.id === id);
  let detailItem = null;

  if (findItem && findItem.productId) {
    detailItem = products.find(item => item.id === findItem.productId);
  } else {
    detailItem = findItem;
  }


  // option_box_event
  const dispatch = useDispatch();
  const optionCount = useSelector((state) => state.counter.value);
  const [flavor, setFlavor] = useState('');
  const [selectOption, setSelectOption] = useState([]);
  const changeFlavor = (e) => {
    const newFlavor = e.target.value;
    if (!newFlavor) return;

    const originalFlavor = selectOption.find(option => option.flavor === newFlavor)

    if (originalFlavor) {
      const newOption = selectOption.map(option =>
        option.flavor === newFlavor ? { ...option, count: option.count+1 } : option
      );
      setSelectOption(newOption);
    } else {
      setSelectOption([...selectOption, {flavor: newFlavor, count: 1}]);
    }

    setFlavor(newFlavor);
  }

  const totalPrice = optionCount * detailItem.price;

  // detail 수량 초기화
  useEffect(() => {
    setFlavor('');
    dispatch(setCount(1));
  }, [id]);

  // detail_tab_event
  const [clickTab, setClickTab] = useState('info');
  // 값을 'info'로 기본 설정해서 info가 처음부터 보이고, review가 들어올 때만 review 보이게
  const [openQna, setOpenQna] = useState(false);
  // false: 모달 닫힌 상태가 기본 상태


  return (
    <div>

      <DetailWrap>
        <div className='detail_img_box'>
          <img src={detailItem.image} style={{ width: '500px' }} />
        </div>

        <div className='detail_info_box'>
          <div className='detail_info'>
            <div className='detail_title'>
              <p>{detailItem.title}</p>
            </div>
            <div className='detail_price_box'>
              <p className='detail_percent'>{detailItem.percent}</p>
              <p className='detail_price'>{detailItem.price.toLocaleString()}원</p>
              <p className='detail_before_price'>{detailItem.beforePrice.toLocaleString()}원</p>
            </div>
          </div>

          <div className='detail_option_box'>
            <h4>맛</h4>
            <select
              id={detailItem.id}
              onChange={changeFlavor}
            >
              <option style={{ textAlign: 'center' }}>맛을 선택해 주세요!</option>
              {detailItem.option.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )
              })}
            </select>

            <h4>옵션</h4>
            {
              selectOption == '' ?
                <p
                  style={{
                    width: '200px',
                    height: '50px',
                    paddingTop: '10px',
                    color: '#666',
                    marginBottom: '40px'
                  }}
                >선택된 옵션이 없습니다.</p> :
                <ul>
                  {selectOption.map((option, index) => {
                    if (option.flavor === '맛을 선택해 주세요!') return null;
                    return (
                      <li key={index}>
                        <div className='detail_amount_box'>
                          <p className='flavor'>{option.flavor}</p>
                          <div className='detail_amount'>
                            <ArrowLeft
                              disabled={optionCount <= 1}
                              onClick={() => {
                                if (optionCount > 1) {
                                  dispatch(decrementByAmount(1));
                                }
                              }}
                            />
                            <p>{optionCount}</p>
                            <ArrowRight
                              onClick={() => dispatch(incrementByAmount(1))}
                            />
                          </div>

                          <p style={{ paddingTop: '13px' }}>{totalPrice.toLocaleString()}원</p>

                          <Xbtn
                            onClick={() => 
                              setSelectOption(selectOption.filter((select) => select !== option))
                              // setFlavor('')
                            }
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
            }

            <div className='detail_last_price'>
              <h4>총 상품 금액</h4>
              {
                flavor === '' ?
                  <h2>0원</h2> :
                  <h2>{totalPrice.toLocaleString()}원</h2>
              }
            </div>
            <CartButton
              onClick={() => {
                notify();
                dispatch(addItem({
                  id: detailItem.id,
                  title: detailItem.title,
                  image: detailItem.image,
                  count: optionCount,
                  price: detailItem.price,
                }))
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} style={{ paddingRight: '5px' }} />
              장바구니에 담기
            </CartButton>
          </div>
        </div>
      </DetailWrap>


      <DetailTab>
        <li
          onClick={() => setClickTab('info')}
          style={{
            backgroundColor: clickTab === 'info' ? '#FC4C02' : '#eee',
            color: clickTab === 'info' ? '#FAFAF8' : '#1a1a1a'
          }}
        >
          <p>상품 정보</p>
        </li>
        <li
          onClick={() => setClickTab('review')}
          style={{
            backgroundColor: clickTab === 'review' ? '#FC4C02' : '#eee',
            color: clickTab === 'review' ? '#FAFAF8' : '#1a1a1a'
          }}
        >
          <p>상품 후기</p>
        </li>
        <li
          onClick={() => setOpenQna(true)}
        >
          <p>1:1 상담 문의</p>
        </li>
      </DetailTab>

      {clickTab === 'info' && (
        <DetailContent>
          <img src={detailItem.detailImage} />
        </DetailContent>
      )}

      {clickTab === 'review' && (
        <DetailReview>
          <ul>
            {detailItem.review.map((reviewContent, index) => {
              return (
                <li
                  key={index}
                  style={{ cursor: 'pointer' }}
                >
                  <div className='review_img'><img src={reviewContent.image} /></div>
                  <div className='review_text_box'>
                    <p className='review_title'>{reviewContent.title}</p>
                    <p className='review_subtext'>{reviewContent.text}</p>
                    <p className='review_date'>{reviewContent.date}</p>
                  </div>
                </li>
              )
            })
            }
          </ul>
        </DetailReview>
      )}

      <QnaModal
        open={openQna}
        // open으로 열리면 openQna값이 true 됨
        close={() => setOpenQna(false)}
        // setOpenQna 함수 호출해서 false 값을 돌려서 끔
      />

    </div>
  )
}