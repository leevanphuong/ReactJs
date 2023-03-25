import React, { useEffect, useState } from 'react'

const dashborad = (props) => {
    const [data,setdata]= useState([])
    useEffect(()=>{
        setdata(props.getProducts)
    },[props])
    const removeItem =(id)=>{
        const check = confirm('Ban co muon xoa')
        if(check){
            props.onRemove(id)
        }
    }
  return (
    <div>
        <button> <a href="/admin/add">Them san pham</a></button>
        {
        data.map((item)=>{
            return <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Categories: {item.categories}</p>
            <img src={item.image} alt="" />
            <br />
            <button onClick={()=> removeItem(item.id)}>Remove</button>
            <button onClick={()=> updateItem(item.id)}><a href={'/admin/update/'+item.id}> Cap nhap</a> </button>
            
        </div>
        })
        }</div>
  )
}

export default dashborad