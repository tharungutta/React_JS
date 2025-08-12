import React from 'react'

const Uncontrolled = () => {


    //* --> passing a  "parameter" to a "func", that func if we pass it as a val for any event , such as case parameter holds --> Synthetic based event
    //! event(onSubmit)--> SBE

    let handleSubmit = (event) =>{
        event.preventDefault()  //* it will stop auto reloading
    }
  return (
   <>
     <form  onSubmit={handleSubmit}>
       <h1>UNCONTROLLED FORM</h1>
       <div>
        <label htmlFor="uname">USER NAME : </label>
        <input type="text" id="uname" />
       </div>
       <div>
        <label htmlFor="uemail">USER EMAIL: </label>
        <input type="email" id="uemail" />
       </div>
       <div>
        <button>SUBMIT</button>
       </div>
     </form>
   </> 
  );
}

export default Uncontrolled