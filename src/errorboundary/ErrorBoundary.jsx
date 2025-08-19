//* shortcut cbc --> rcc

import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(){
        super()
        this.state = {
            haserror:false //! "false" indicates initially there is no error
        }
    }
    
    //* stores error
    //* returns "updated state" in the form of "obj"

    static getDerivedStateFromError(){
        return{
            haserror : true //! "true" indicates there is an error
        }
    }

    render() {
        console.log(this); // current CBC

        if(this.state.haserror === true){
            //! indicates there is an error
            return <h1>Amount is exceded!! Please check!!</h1>
        }else{
            //! indicates there is no error
            return this.props.children; // retuning Receiver.jsx
        }            
  }
}
export default ErrorBoundary;