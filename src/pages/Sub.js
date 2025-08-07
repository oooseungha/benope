// ------------------------ React
import React from 'react'


// ------------------------ Router
import { Outlet } from 'react-router-dom';


export default function Sub() {
  return (
    <div
      style={{
        width: '1048px',
        margin: '0 auto 150px auto',
        borderBottom: '1px solid #ccc'

      }}
    >
      <Outlet />
    </div>
  )
}
