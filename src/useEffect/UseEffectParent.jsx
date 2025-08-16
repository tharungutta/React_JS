// import React, {useEffect, useState} from 'react'
// import UseEffectChild from './UseEffectChild'

// const UseEffectParent = () => {

// let [student, setStudent] = useState("Tharun")
// let [tech, setTech] = useState("webtech")
// //* only function / no dependency list

// useEffect(() => {
//     console.log("UseEffect1 --> Equal to both componentDidmount & componentDidUpdate");
// })

// //* [] --> empty dependency list
// // component did mount --> 'executes only once'

// useEffect(()=>{
//     console.log("useEffect2 --> Equal to componentDidMount");
// }, [])


// //* [value] --> executes when we do "any changes" to the "passed val"
// useEffect(()=> {
//     console.log("useEffect3 --> Equal to componentDidUpdate");
    
// },[student])

// let changeStudent = ()=>{
//     setStudent("Jyothi")
// }

// let changeTech = () => {
//     setTech("js")
// }
//   return (
//     <>
//       <h1>{student}</h1>
//       <h1>{tech}</h1>
//       {student === "Tharun" ? <UseEffectChild/> : <></>}
//       <button onClick={changeStudent}>CHANGE STUDENT</button>
//       <button onClick={changeTech}>CHANGE TECH</button>
//     </>
//   );
// }

// export default UseEffectParent

//? setStudent() --> before btn click updater fun called without value
//? setStudent("jyothi") --> after btn click updater fun called with value.



import React, { useEffect, useState } from 'react'

const UseEffectParent = () => {

    let [toggle, setToggle] = useState(false)

    // targetting the tittle of web page --> sideEffect --> useEffect

    useEffect(()=> {
        if(toggle){
            document.title = "QSpiders"
        }else{
            document.title = "JSpiders"
        }
        console.log("useEffect is calling --> tittle targeted");
    })
  return (
    <>
      <button onClick={()=>{setToggle(!toggle)}}>TOGGLE TITTLE</button> {/*INLINE FUNCTION*/}
    </>
  );
}

export default UseEffectParent

//! implict return : const var = ()=> expression