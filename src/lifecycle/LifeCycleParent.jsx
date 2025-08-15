//! cbc --> shortcut --> rcc

// import React, { Component } from 'react'
// import LifeCycleChild from './LifeCycleChild';
//  class LifeCycleParent extends Component {

//     constructor(){
//         super()
//         this.state = {
//             student : "tharun"
//         }
//         console.log("constructor is calling");
//     }

//     static getDerivedStateFromProps(){
//         console.log("static getDerivedStateFromProps is executing ...");
//         return null
//     }

//     shouldComponentUpdate(){
//         console.log("shouldComponentUpdate is executing...");
//         return true
//     }

//     getSnapshotBeforeUpdate(){
//         console.log("getSnapshotBeforeUpdate is calling...");
//         return null
//     }

//     componentDidMount(){
//         console.log("ComponentDidMount is executing...");
//     }

//     componentDidUpdate(){
//         console.log("componentDidUpdate is executing..."); 
//     }

//     changeState = () => {
//         this.setState({student : "monica"});
//     }

//   render() {
//     //console.log(this);// current CBC
//     console.log("render is executing...");
//     return (
//       <>
//         <h1>{this.state.student}</h1> 
//         {this.state.student === "tharun" ?<LifeCycleChild/>: <></>}
//         <button onClick={this.changeState}>CHANGE STUDENT</button>
//       </>
//     );
//   }
// }
// export default LifeCycleParent;
