// ------------------------ React
import React from 'react'


// ------------------------ Router
import { Outlet } from 'react-router-dom';


export default function Sub() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}
