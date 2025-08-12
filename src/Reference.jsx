// //! Reference variable
// //* STEPS

// //? 1.--> Create a reference variable  --> useRef()
// // let refernce -variable = useRef()
// //? 2.--> Connect "reference-variable" and "particular-element"
// //? (Targetting the particular element)
// //! special props --> ref
// // Syntax : <element ref = {reference-variable}/>

// //! In "reference obj" there is a key --> current
// //? Before targetting any element(default val) of "current" key --> undefined
// //? After targetting the "particular element" val of "current" --> targetted element

// import React,{useRef} from 'react'

// const Reference = () => {

//    //! step-1 : Create a refernce variable
//    let inputRef = useRef();
//    console.log(inputRef);  //obj

//    let handleInput = ()=> {
//     inputRef.current.placeholder = "Enter your name"
//     inputRef.current.style.background = "yellow"
//     inputRef.current.style.padding = "10px"
//     inputRef.current.focus()
//    }

//    //! Step-2 : Connect "reference-variable" and "particular element"
//   return (
//     <>
//        <input type="text" ref={inputRef} />
//        <button onClick={handleInput}>CHANGE</button>
//     </>
//   );
// }

// export default Reference