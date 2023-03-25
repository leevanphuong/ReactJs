import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const addProduct = (props) => {
    const navita = useNavigate()
    const [input,setInput]= useState()
    const onchange =(e)=>{
        const {name,value} = e.target
        setInput({...input,[name]: value})
    }
    const submit =(e)=>{
        e.preventDefault()
        props.onAdd(input)
        navita('/admin')
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            Nhap ten san pham
            <input type="text" onChange={onchange}  name="name"/>
            <br />
            Nhap gia san pham
            <input type="number" onChange={onchange}   name="price"/>
            <br />
            Nhap hinh anh san pham
            <input type="text" onChange={onchange}  name="image"/>
            <br />
            Nhap danh muc san pham
            <input type="text" onChange={onchange} name="categories"/>
            <br />
            <button type="submit">Them</button>
        </form>
    </div>
  )
}

export default addProduct