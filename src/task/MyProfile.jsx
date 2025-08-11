// import React from 'react'

// const MyProfile = (props) => {

//     console.log(props);
//     let {info:{pname,nation,ipl_team,image,jersy_no,runs=20000,matches},children}= props

//   return (
//     <>
//       <section>
//         <h1>Profile of {pname}</h1>
//         <img src={image} alt="" height="200px" width="200px" />
//         <h2>Nation: {nation}</h2>
//         <h2>IPL: {ipl_team}</h2>
//         <h2>Jersy_no: {jersy_no}</h2>
//         <h2>Matches: {matches || 1000} Runs:{runs}</h2> {/* default props */}{children}
//       </section>
//     </>
//   );
// }

// export default MyProfile


// //! useContext()

// import React,{useContext} from 'react'
// import { ProfileApi } from '../context/ProfileContext'


// const MyProfile = () => {

//     //! Step 3: context consumer
//     //* Syntax : let value = useContext(ContextApi)

//     let data = useContext(ProfileApi)
//     console.log(data);
//     let {employee, salary, company, changeCompany} = data;
    
//     return ( 
//     <>
//        <h1>Employee : {employee}</h1>
//        <h1>Salary : Rs.{salary}</h1>
//        <h1>Company : {company}</h1>
//        <button onClick={changeCompany}>CHANGE COMPANY</button>
//     </>
//   );
// }

// export default MyProfile
