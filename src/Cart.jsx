// import React from 'react'

// const Cart = (props) => {

//     console.log(props);
//     let{ addtocart:{product,cost}} = props
    
//   return (
//     <>
//       <h1> Cost of {product} is Rs.{cost}/-</h1>
//     </>
//   )
// }

// export default Cart


//! 

// import React from 'react'

// const Cart = (props) =>{
//     console.log(props);

//     let {addtolist, children } = props.addtocart;
//     let {item,colors,price,company}= addtolist
//     let [c1,c2,c3] = colors
//     let {cost1,cost2} = price 

//   return (
//     <>
//       <section>
//         <h1>Product : {item}</h1>
//         <h1>Company : {company}</h1>
//         <h1>Colors Available : {c1},{c2},{c3}</h1>
//         <h1>Costs : Rs.{cost1}/- Rs.{cost2}/-</h1> {children}
//       </section>
//     </>
//   )
// }

// export default Cart

//! context api
//* Syntax : let value = useContext(ContextApi)

import React, {useContext } from 'react'
import { ProductApi } from './context/ProductContext'
 
const Cart = () => {

    //! step 3: context consumer
    let data = useContext(ProductApi);
    console.log(data);
    
  return ( 
    <>
       <h1>Cart...{data}</h1>
    </>
  ) ;
}

export default Cart