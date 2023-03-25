import React, { useEffect, useState } from 'react'
import {useParams }from 'react-router-dom'
import { getOne } from '../api/products'

const productsDetail = () => {
 const {id}= useParams()
 const [product, setProduct]=useState({})
 useEffect(()=>{
    getOne(id).then(({data})=> setProduct(data))
 },[])
  return (
    <div key={product.id}>
    <h3>{product.name}</h3>
    <p>Price: {product.price}</p>
    <p>Categories: {product.categories}</p>
    <img src={product.image} alt="" />
    <br />
    <button onClick={()=> removeItem(product.id)}>Remove</button>
    </div>
  )
}

export default productsDetail