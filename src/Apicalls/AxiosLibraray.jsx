//! axios
//* JS library
//install library --> terminal --> npm i axios
// import it
//* Using axios , make all http req(post,get,put,delete) to server
//* In axios , all http req are stored in the form method

import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"

const AxiosLibraray = () => {

  let [user,setUser] = useState([])

    // resolve the promise --> async(func) and await(promise)
    let getApi = async () =>{
        let {data} = await axios.get("https://api.github.com/users");
        // console.log(a);
        setUser(data)
    }

    console.log("state",user); //array
    
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
    <>
       <table>
         <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>USER NAME</th>
          </tr>
         </thead>
         <tbody>
          {user.map((val)=>{
            console.log("current array val",val);
            return(
              <Fragment key={val.id}> 
                  <tr>
                    <td>{val.id}</td>
                    <td>
                      <img src={val.avatar_url} alt=""  height="50px" width="50px"/>
                    </td>
                    <td>{val.login}</td>
                  </tr>
              </Fragment>
            );
          })}
         </tbody>
       </table>
    </>
  )
}

export default AxiosLibraray