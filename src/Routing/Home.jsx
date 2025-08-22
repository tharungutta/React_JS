import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
       <h1>HOME</h1> {/* landing page content*/}
    </>
  )
}

export default Home



//! Shared Routing --> Along with the url parent Route component, "content" also shared
//NOTE: Always <Outlet/> should be written inside every "parent route component"
//! PROBLEM : Along with the content of individual webpage,the content of Parent Route component is displaying...
//? SOLUTION : Index routing / Index Props

//! Index routing / Index Props
//? 1) Create a new component i.e Layout.jsx [Supportive compo for Home.jsx ]
//? 2) Sepearte the " landing page content"(<h1>HOME</h1>) and (<Outlet/> & common logic ) among Home>jsx and Layout.jsx
//Way1 : If we write "landing page content"(<h1>HOME</h1>) in "Layout.jsx" then write <Outlet/> * <NavBar/> in "Home.jsx"
      // **** OR******
//Way2 : if we write "landing page content"(<h1>HOME</h1>) in "Home.jsx" then write <Outlet/> * <NavBar/> in "Layout.jsx"