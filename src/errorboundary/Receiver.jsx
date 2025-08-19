import React from 'react'

const Receiver = (props) => {

    console.log(props);
    let {money} = props

    //! developer side
    if(money > 20000){
        throw new Error("amount execeeded!!")
    }
    
  return (
    <>
      <h1>Transaction of Rs.{money}/-</h1>
    </>
  );
}

export default Receiver