import React, { useEffect, useState } from 'react'

const products = (props) => {
    const [data, setdata]= useState([])
    useEffect(()=>{
        setdata(props.onProduct)
    }, [props])
    const removeItem=(id)=>{
        const check = confirm('Ban co muon xoa')
        if(check){
            props.onRemove(id)
        }
    }
  return (
    <div>{
        data.map((item)=>{
            return <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Categories: {item.categories}</p>
                <img src={item.image} alt="" />
                <br />
                <button onClick={()=> removeItem(item.id)}>Remove</button>
            </div>
        })   
        
    }
        </div>
  )
}

export default products