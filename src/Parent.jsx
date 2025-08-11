
//! Send data from Parent.jsx to Child.jsx
//! Sending "multipropvalue" under "same propname " --> within expression wrap "array & object"
//* Sender/top --> Parent.jsx    receiver/bottom --> Child.jsx

// import React from "react"
// import Child from "./Child"

// const Parent =() => {
//     let employee = "Tharun"
//     let company = "google"
//     let salary = 50000

//     let tech1 = "html"
//     let tech2 = "css"
//     let tech3 = "js"
//     return (
//         <>
//           <Child
//              empInfo = {{employee, company, salary}}
//              skills = {[tech1,tech2,tech3]}
//           />
//         </>
//     )
// }
// export default Parent
  


// ! Props children 

// import React from "react"
// import Child from "./Child"

// const Parent =()=> {
//   return(
//     <>
//        <Child> 
//           <h1>Learning props- children</h1>
//           <p>I am paragraph</p>
//           i am content
//         </Child>
//     </>
//   );
// }
// export default Parent


//! props -children -->destructuring

// import React from "react"
// import Child from "./Child"

// const Parent = () => {
//   return(
//     <>
//       <Child>
//          <h2> Props children destrucing</h2>
//          <h4>Please be active</h4>
//       </Child>
//     </>
//   )
// }
// export default Parent




//! default props 
//* When sender is not actually sending data but receiver is expecting data
//? NOTE : works only when sender is not sending particular props.

// import React from "react"
// import Child from "./Child"

// const Parent = () => {
//   return(
//     <>
//       <Child />
//     </>
//   )
// }
// export default Parent

//! in this below example we are giving the rating , it will consider parent rating only.
// import React from "react"
// import Child from "./Child"

// const Parent = () => {
//   return(
//     <>
//       <Child rating = {3}/>
//     </>
//   )
// }
// export default Parent


//! Way 2
// import React from "react"
// import Child from "./Child"

// const Parent = () => {
//   return(
//     <>
//       <Child rating = {4}/>
//     </>
//   )
// }
// export default Parent






//! mutable --> value can be changed
//! immutable --> value cannot be modified

//* props --> immutable --> value cannot be modified
//? ERROR --> read only error

// import React from 'react'
// import Child from "./Child"
// const parent = () => {

//     let developer = "Tharun"

//   return (
//     <>
//       <Child
//          dev = {developer}
//       /> 
//     </>
//   )
// }
// export default Parent



//! prop-types


// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <>
//      <Child name = "Kat" age = "30"/>
//     </>
//   )
// }

// export default Parent
