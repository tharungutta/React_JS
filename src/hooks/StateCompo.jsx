//! Hooks --> Functions--> FBC --> 16.8
//! --> Hooks allows Functional component to have access to state and other react feautres which present in class based components.
//! 3 type of hooks --> 1.useState  2. useEffect   3.useContext

//* 1. useState() --> allow us to add state to FBC
//* --> useState() return arrays
//* --> it accepts 2 values : 1. current state(State variable) 2. updator fun(State updater fun)


// import React,{useState} from 'react'

// const StateCompo = () => {

//      let [developer, setDeveloper]= useState("Tharun")//! state variable
//      let student = "prajwal"  //! noraml variable

//      let changeState =() => {
//         setDeveloper("Giri")
//      }
//   return (
//     <>
//        <h1> State--{developer}</h1>
//        <h1>Normal--{student}</h1>
//        <button onClick={changeState}> CHANGE STATE</button>
//     </>
//   );
// }

// export default StateCompo



//*  State variable --> data can be present at "Component level"
//*  normal variable --> data cannot be present at component level
//? --> Don't pass updator fun directly to onClick
//? --> since updator fun is "Asynchronous in nature" even before we click on btn fun will go to infinite loop.
//?  --> "ERROR"--> Too many re-renders. React limits number of renders to prevent
//! <button onClick={setDeveloper("Giri")}> CHANGE STATE</button>   X   don't do like this.




//! Toggle


// import React, { useState } from 'react'

// const StateCompo = () => {

//  let [follow, setFollow] = useState(false)

//  let toggle =() => {
//    setFollow(!follow); //follow --> false
//    //* 1st btn : !false--> true
//    //* 2dn btn : !true --> false
//  }

//   return (
//     <>
//      <h1>{follow ? "FOLLOWING" : "NOT FOLLOWING"}</h1>
//      <button onClick={toggle}> {follow ? "UNFOLLOW" : "FOLLOW"}</button>
//     </>
//   );
// }

// export default StateCompo





