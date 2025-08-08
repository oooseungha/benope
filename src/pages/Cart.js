// ------------------------ React
import React from 'react'


// ------------------------ Redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, addCount, subCount } from '../redux/cartSlice';


// ------------------------ Styled-Components
import styled from 'styled-components';
import { TitleDiv, ArrowLeft, ArrowRight } from '../components/StyledComponent.js'

const Wrap = styled.div`
  width: 1048px;
  margin: 100px auto 200px auto;
`

const Table = styled.table`
  width: 1048px;
  text-align: center;
  th {
    padding: 20px;
    background-color: #FFD6C5;
    font-size: 17px;
  }
  tr {
    &:hover {
      background-color: #eee;
    }
  }
  td {
  }
  .amount_box {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 0 1px;
      font-weight: 500;
      font-size: 20px;
      width: 40px;
      text-align: center;
    }
    
  }
  .total_box td {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;
    background-color: #eee;
  }
`

const DelBtn = styled.button`
  display: block;
  width: 70px; height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 5px;
`


export default function Cart() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const totalCount = state.cart.reduce((sum, item) => sum + item.count, 0)
  const totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <Wrap>

      <TitleDiv>
        <p>장바구니</p>
      </TitleDiv>

      <Table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>제품 이미지</th>
            <th>금액</th>
            <th>수량</th>
            <th>총 금액</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((item, i) => {
              return (
              <tr key={i}>
                <td style={{fontWeight: 500}}>{state.cart[i].title}</td>
                <td style={{width: '120px'}}><img src={state.cart[i].image} style={{width: '120px'}} /></td>
                <td>{state.cart[i].price.toLocaleString() + '원'}</td>
                <td className='amount_box'>
                  <ArrowLeft
                    disabled = {state.cart[i].count <= 1}
                    onClick={() => {
                      if (state.cart[i].count > 1) {
                        dispatch(subCount(state.cart[i].id));
                      }
                    }}
                    />
                  <p>{state.cart[i].count}</p>
                  <ArrowRight onClick={() => dispatch(addCount(state.cart[i].id))}/>
                </td>
                <td>{(state.cart[i].price * state.cart[i].count).toLocaleString()}원</td>
                <td>
                  <DelBtn onClick={() => dispatch(deleteItem(state.cart[i].id))}>삭제</DelBtn>
                </td>
              </tr>
              )
            })
          }
          <tr className='total_box'>
            <td colSpan={4}>총 수량</td>
            <td colSpan={3}>{totalCount}</td>
          </tr>
          <tr className='total_box'>
            <td colSpan={4}>총 금액</td>
            <td colSpan={3}>{totalPrice.toLocaleString()}</td>
          </tr>
        </tbody>
      </Table>
    </Wrap>
  )
}
