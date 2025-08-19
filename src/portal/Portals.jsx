import React from 'react'
import { createPortal } from 'react-dom'

const Portals = () => {
  return createPortal(<h1>I am Portal</h1>, document.getElementById("portal"));
}

export default Portals

//! createPortal(content, container)
// content --> string , number, JSX , component
// container --> target newly created element.