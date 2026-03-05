 import React from 'react'

 function ProductDetails(props){
 const {name , quantity , isAvail , speciality , address} = props;
 return (
    <>
    <h1>{name}</h1>
    <h1> Quantity : {quantity}</h1>
    <h1> Status : {isAvail ?  true : false}</h1>
    <h2> Speciality : </h2>
    <ul>  {speciality.map((specail, index) => (
        <li key={index}> {specail}</li>
    )
     )
     }</ul>
     <h3> {address.street} , {address.city}</h3>
    </>
 )
 }
 export default ProductDetails