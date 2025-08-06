//* This is a component file

// import React from "react"

// const Child=() => {
//     return <h1>I am Child</h1>
// }
// export default Child









//! receving data from Parent.jsx

// import React from "react"
// const Child = (props) =>{
//     console.log(props);
//     let {empInfo:{employee,company,salary},skills:[skill1,skill2,skill3]}= props;
//     return(
//         <>
//            <h1>Employeee : {employee}</h1>
//            <h2>Company : {company}</h2>
//            <h2>Salary : {salary}</h2>
//            <h2>Skills : {skill1},{skill2},{skill3}</h2>
//         </>
//     )
// }
// export default Child


//! props - Children
 
// import React from "react"
// const Child  = (props) => {
//     console.log(props);
//     return(
//         <>
//            {props.children}
//         </>
//     )
// }
// export default Child

//! Props children --> destrcturing

//? "after" receiving

//  import React from "react"
//  const Child = (props) => {
//     console.log(props);
//     let {children} = props
//     return (
//         <>
//           {children}
//         </>
//     )
    
//  }
//  export default Child


//? "while " receving
//  import React, { Children } from "react"

//  const Child = ({children})  => {
//     return(
//         <>{children}</>
//     )
//  }
//  export default Child





//! default props
//? way 1 

// import React from "react"
// const Child = (props) => {
//     console.log(props);
//     let {item ="book",rating=0} = props
//     return(
//         <>
//           <h1>Item : {item}</h1>
//           <p>Rating : {rating}</p>
//         </>
//     )
// }
// export default Child

//? Way 2

// import React from "react"
// const Child = (props) => {
//     console.log(props);
//     let {item,cost,rating} = props
//     return(
//         <>
//           <h1>Item : {item || "pencil"}</h1>
//           <h1>Cost : {cost || 50}</h1>
//           <h1>Rating : {rating || 3}</h1>
//         </>
//     )
// }
// export default Child





//! Syntax to modify : Objname.keyname= new_data

// import React from 'react'

// const Child = (props) => {

//     console.log(props);
//     props.dev= "jyothi" //! modifing props
    
//   return (
//     <>
//        <h1>{props.dev}</h1> 
//     </>
//   )
// }

// export default Child

    