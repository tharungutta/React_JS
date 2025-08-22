import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <nav>
        <ul>
           <NavLink to="/">
            <li>HOME</li>
           </NavLink>
           <NavLink to="/menu">
            <li>MENU</li>
           </NavLink>
           <NavLink to="/setting">
            <li>SETTING</li>
           </NavLink>
        </ul>
       </nav>
    </>
  );
}
export default Navbar

//! In routing , instead of "anchor tag" --> Link/NavLink , "href" --> to
//? NavLink --> extra feature --> "class" attribute with value "active"