import React,{createContext, useState} from 'react'
import MyProfile from "../task/MyProfile"

//! Step 1 : create a context
export let ProfileApi = createContext()


const ProfileContext = () => {

    let employee = "Tharun"
    let salary = 200000
    let [company, setCompany] = useState("Google")

    let changeCompany =() =>{
        setCompany("Microsoft")
    }

    //! step 2: context provider
  return (
    <ProfileApi.Provider value={{employee,salary,company,changeCompany}}>
        <MyProfile/> 
    </ProfileApi.Provider>
  )
}

export default ProfileContext