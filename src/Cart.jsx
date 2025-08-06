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