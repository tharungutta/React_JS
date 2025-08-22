import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
               <Navbar/> {/* common content for all the pages */}
                <Outlet/>
    </>
  )
}

export default Layout