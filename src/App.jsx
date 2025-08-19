//!this is a component file


//! Class based component (CBC)
//* --> in cbc, render() is must
//* --> in cbc, "this" keyword points --> "current CBC"
//? stateful --> in CBC , inbuilt "state"

// import React,{Component} from "react"
// class App extends Component{
//     render(){
//         console.log(this);
//         return <h1>CBC</h1>
//     }
// }
// export default App

//? Child(LHS) inherited Parent (RHS)


//! 2 . Functioanl based Component(FBC)/ stateless
//* --> no render() for FBC
//* --> in FBC, "this" keyword does not point current FBC ,it shows --> undefined
//? stateless --> in FBC, no inbuilt "state"

// import React from "react"
// const App=() =>{
//     return <h1>FBC</h1>
// }
// export default App


//! Rendering one component inside the another component.
//*--> let us keep "App.jsx" as main component 
//*--> Then render all the "remaining component" inside the main component

//! Steps
//? 1. import the "Sub Component" inside the "main component"
//? 2. Render/Return Sub Comp inside "Main component"

// import React from "react"
// import Child from "./child"

// const App = () => {
//     return <Child/>
// }
// export default App


//! JSX --> JS+XML --> JavaScriptXML --> (extended version of js)
//* --> Extra feautres are added to normal js using XML,
//* --> So we can write "HTML like code" in the js itself
//* --> Code is easier, syntax is simpler ,"faster" than normal JS

//! Rules:
//* 1.While returning "multiple JSX element"(more than one)
//* --> Wrap them by () and provide them one parent

//! --> div tag as a parent --> extra node will be created in the DOM.
// import React from "react"
// const App = ()=> {
//  return (
//     <div>
//         <h1>Learning JSX</h1>
//         <p>Multiple JSX element</p>
//      </div>
//      );
// }
// export default App;

//! --> Fragement as a parent --> "Fragment" inbuilt component inside "react"
// import React, { Fragment } from "react"
// const App=()=>{
//     return(
//         <Fragment>
//             <h1>Learning JSX</h1>
//             <p>Multiple Jsx element</p>
//         </Fragment>
//     );
// }
// export default App


//* --> Wrap multiple jsx element together without creating extra node in DOM -> 

//!   <></>(empty angular bracket--> shorthand)
// import React  from "react"
// const App =() =>{
//     return (
//         <>
//            <h1>Learning JSX</h1>
//            <p>Multiple JSX element</p>
//         </>
//     );
// }
// export default App

//! 2. Every element in JSX , every element must be closed.
//?(NOTE: "unpaired tag og html" close it as "self closing tag" in Jsx)

//! 3. To return value stored inside any variable we have wrap the variable by {}->expression

//! 4. camelCaseConvention --> viratKohliTharun
//* class --> className
//* for --> htmlFor(label tag)
//* onclick --> onClick











//! Shortcut FBC --> rafce

// import React from "react"
// import Parent from "./Parent"

// const App = () =>{
//     return(
//         <> 
//           <Parent/>
//         </>
//     )
// }
// export default App



// import React from 'react'
// // import ProfileInfo from './task/ProfileInfo'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <>
//       {/* <ProfileInfo/>  */}
//       <Parent/>
//     </>
//   )
// }

// export default App



// import React from 'react'
// import Product from './Product'

// const App = () => {
//   return (
//     <>
//       <Product/>
//     </>
//   )
// }

// export default App


// import React from 'react'
// // import StateCompo from "./hooks/StateCompo"
// // import SimpleCounter from "./task/SimpleCounter"
// // import ProductContext from './context/ProductContext'
// import ProfileContext from './context/ProfileContext'

// const App = () => {
//   return (
//     <>
//        <ProfileContext/>
//     </>
//   )
// }

// export default App


//! Reference

// import React from 'react'
// // import Reference from './Reference'
// // import VideoReference from './task/VideoReference';
// import Uncontrolled from './Uncontrolled';

// const App = () => {
//   return (
//     <>
//       <Uncontrolled/>
//     </>
//   );
// }

// export default App


//! lifeCycle
// import React from 'react'
// import LifeCycleParent from './lifecycle/LifeCycleParent';

// const App = () => {
//   return (
//     <>
//       <LifeCycleParent/>
//     </>
//   )
// }

// export default App

//! useEffect
// import React from 'react'
// import UseEffectParent from './useEffect/UseEffectParent'

// const App = () => {
//   return (
//     <>
//      <UseEffectParent/>
//     </>
//   )
// }

// export default App


//! List & key-props rendering
//* --> List --> collection of data --> array
//* --> rendering -->loading/dislaying content on UI
//* --> key props--> Special prop. Used to identify the elements
//* --> uniquely from others
// key = value , "value" passed must be unique.

// import React, { Fragment } from 'react'

// const App = () => {

//   let students = ["jyothi","tharun","manoj","jyothi","tharun"];

//   return (
//     <>
//       {students.map((val,ind)=>{
//           // console.log("current val",val);
//           // console.log("***************");
//           return(
//             <Fragment  key={ind}>
//               <ul>
//                 <li>{val}</li>
//               </ul>
//             </Fragment>
//           );         
//       })}
//     </>
//   )
// }

// export default App


//! Extracting data from server by making AP
//* 1) fetch()  2)axios
//* API --> https://api.github.com/users --> JSON format

// import React from 'react'
// // import FetchMethod from './Apicalls/FetchMethod'
// import AxiosLibraray from './Apicalls/AxiosLibraray'
// // import Sender from './errorboundary/Sender'

// const App = () => {
//   return (
//     <>
//        {/* <Sender/> */}
//        <AxiosLibraray/>
//     </>
//   )
// }

// export default App



//! Portal

import React from 'react'
import Portals from "./portal/Portals"

const App = () => {
  return (
    <>
    <h1>I am App</h1>
      <Portals/>
    </>
  )
}

export default App