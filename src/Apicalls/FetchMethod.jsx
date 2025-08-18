//! Fetch
//* js method
//Extract data's from api
//! STEPS:
//* 1. fetch() returns "promise"--> get--> "pending"
//* 2. Resolve the promise 1st time  --> Response obj
//* 3. Convert Response obj into JSON obj --> Promise(pending)
//* 4. Resolve the promise 2nd time --> actual data


import React, { Fragment, use, useEffect, useState } from 'react'

const FetchMethod = () => {

    let [user, setUser] = useState([])

    //* resolve the promise --> async(func) & await (promise)
    let getApi = async ()=> {
        let responseObj = await fetch("https://api.github.com/users");
      //  console.log(responseObj);
        let data = await responseObj.json(); //! converting Response obj into JSON obj then resolving promise
      //  console.log(data);  //? actual data
      setUser(data)  //! passing the data and storing in state        
    }

    console.log("state",user); //array

    //* fetching data from api --> sideEffect --> useEffect
    //* [] --> "componentDidMount" --> "executes only once"
    useEffect(()=>{
        try{
            getApi()
        }catch(e){
            console.log(e);
            
        }
    },[])
    
  return (
    <>
      {user.map((val)=>{
        console.log("current val",val);//obj
        return(
            <Fragment  key={val.id}>
                <section>
                    <h1>ID : {val.id}</h1>
                    <img src={val.avatar_url} alt="" height="200px" width="250px" />
                    <h2>User : {val.login}</h2>
                </section>
            </Fragment>
        );        
      })}
    </>
  )
}

export default FetchMethod