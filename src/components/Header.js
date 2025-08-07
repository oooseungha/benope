// ------------------------ React
import React from 'react'


// ------------------------ Router
import { NavLink } from 'react-router-dom';


// ------------------------ Redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, addCount, subCount } from '../redux/cartSlice';


// ------------------------ 외부 라이브러리
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';


// ------------------------ Styled-Components
import styled from 'styled-components'

const HeaderAd = styled.div`
  width: 100%; height: 40px;
  background-color: #FC4C02;
  color: #fafaf8;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
`
const HeaderWrap = styled.div`
  width: 1048px;
  margin: 0 auto;

`
const GnbTop = styled.ul`
  float: right;
  li {
    font-size: 0;
    float: left;
    padding: 10px 0;
    a {
      font-size: 13px;
      padding: 10px;
      text-decoration: none;
      color: inherit;
      &:hover {
        color: #FC4C02;
        font-weight: bold;
      }
    .cart_count {
      display: inline-block;
      width: 25px; height: 20px;
      color: white;
      background-color: #666;
      text-align: center;
      line-height: 20px;
      border-radius: 7px;
      font-weight: 500;
      }
    }
  }
`
const Gnb = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 0 10px;
  margin-bottom: 20px;
  li {
    .gnb_menu {
      text-decoration: none;
      color: inherit;
      &:hover {
        border-bottom: 2px solid #FC4C02;
      }
    }
  }
  input {
    width: 300px; height: 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-top: -3px;
    padding-left: 10px;
  }
`


export default function Header() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const totalCount = state.cart.reduce((sum, item) => sum + item.count, 0)

  return (
    <div>
      <HeaderAd>
        <p>가입 즉시 2,000원 할인 쿠폰 지급! 🎁</p>
      </HeaderAd>
      <HeaderWrap>

        {/* ----- gnb_top ----- */}
        <GnbTop>
          <li><NavLink to='/'><FontAwesomeIcon icon={faHouse} /></NavLink></li>
          <li><a href="#!">로그인</a></li>
          <li><NavLink to='cart'>
               <span>장바구니 </span>
               &nbsp;
               {
                totalCount === 0 ? '' : <span className='cart_count'>{totalCount}</span>
               }
            </NavLink></li>
          <li><a href="#!">내 정보</a></li>
        </GnbTop>

        {/* ----- logo ----- */}
        <div 
          style={{width: '185px', height: '49px', margin: '0 auto 50px auto', padding: '50px 0'}}
        >
          <NavLink to='/'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='브랜드 로고' />
          </NavLink>
        </div>
        
        {/* ----- gnb ----- */}
        <Gnb>
          <li><NavLink to='/sub/all' className='gnb_menu'>전체보기</NavLink></li>
          <li><NavLink to='/sub/shake' className='gnb_menu'>단백질쉐이크</NavLink></li>
          <li><NavLink to='/sub/protein' className='gnb_menu'>단백질바</NavLink></li>
          <li><NavLink to='/sub/bakery' className='gnb_menu'>베이커리&제로스낵</NavLink></li>
          <li><NavLink to='/sub/event/now' className='gnb_menu'>이벤트</NavLink></li>
          <li><NavLink to='/sub/info' className='gnb_menu'>브랜드 소개</NavLink></li>
          <li><input type="text" /></li>
        </Gnb>
      </HeaderWrap>


    </div>
  )
}
