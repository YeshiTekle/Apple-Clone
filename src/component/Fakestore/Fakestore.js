// import React, { useEffect, useState } from 'react'

// function Fakestore() {
//     const[products,setproducts]=useState([])
// useEffect(()=>{
//     fetch("https://fakestoreapi.com/products?limit=5")
//     .then((response)=>response.json())
//     .then((data)=>{
//         const productdata=data;
//         setproducts(productdata)
//     })
// },[]);








//   return (
//     <div >
//         <div className="container-fluid">
//           <div className="row col-12 h-10 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold video-title-wrapper">
//                 Latest Videos
//               </div>
//             </div>
        
//        <div className='col-3' >
//         {products.map((prod)=>{
//             let title=prod.title;
//             let thumb=prod.image
//             let link=(
             
                
//                 <img src={prod.image}></img>
                
//                 );
//                 return link
            
//         })}
//         </div>
//         </div>
//         </div>


//     </div>
//   )
// }

// export default Fakestore

import React, { useEffect,useState } from 'react'

function Fakestore() {
    const[products,setproducts]=useState([])
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
    .then((response)=>response.json())
    .then((data)=>{
        const porddata=data;
        setproducts(porddata)
    })
},[])
console.log(products)

  return (
    <div>
        <div>
            nmindfi iu hfvi hFIUBv ihdfbvi ud
        </div>
        {products.map((pro)=>{
            let url=pro.image
            let link=(
                <img src={pro.image}></img>
            )
            return link
        }
        )}



    </div>
  )
}

export default Fakestore