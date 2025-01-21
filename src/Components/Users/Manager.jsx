import React from 'react'
import { useNavigate } from 'react-router-dom';
import Admin from '../Admin';
import { Outlet } from 'react-router-dom';
const Manager = () => {

  return (
    <>
    <Admin user="manager" />
    {/* <Outlet/> */}
    </>
  )
}

export default Manager