import React from 'react'
// import { incrementByAmount } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      
    </div>
  )
}
