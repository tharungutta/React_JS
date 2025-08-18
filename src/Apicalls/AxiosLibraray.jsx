//! axios
//* JS library
//install library --> terminal --> npm i axios
// import it
//* Using axios , make all http req(post,get,put,delete) to server
//* In axios , all http req are stored in the form method

import React, { useEffect } from 'react'
import axios from "axios"

const AxiosLibraray = () => {

    // resolve the promise --> async(func) and await(promise)
    let getApi = () =>{
        let a = axios.get("https.//api.github.com/users");
        console.log(a);
    }

    // fetching data from api --> sideEffect --> useEffect
    //* [] --> "componentDidMount"--> "executes only once"
    useEffect(()=>{
        try{
          getApi()
        }catch(e){
            console.log(e);   
        }
    },[])

    
  return (
    <>AxiosLibraray</>
  )
}

export default AxiosLibraray