import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const update = (props) => {
    const {id}= useParams()
    const naviga = useNavigate()
    const [data, setdata]= useState({})
    useEffect(()=>{
        const NewProducts = props.ItemUpdate.find(item=> item.id ==id)
        setdata(NewProducts)
    })
    const [input, setInput]=useState({})
    const onChange=(e)=>{
        const {name, value}= e.target
        setInput({...input, [name]: value})
    }
    const submit=(e)=>{
        e.preventDefault()
        props.onUpdate({...data, ...input})
        naviga('/admin')
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            Nhap ten san pham
            <input type="text" onChange={onChange} defaultValue={data?.name} name="name"/>
            <br />
            Nhap gia san pham
            <input type="number" onChange={onChange} defaultValue={data?.price}  name="price"/>
            <br />
            Nhap hinh anh san pham
            <input type="text" onChange={onChange} defaultValue={data?.image} name="image"/>
            <br />
            Nhap danh muc san pham
            <input type="text" onChange={onChange} defaultValue={data?.categories} name="categories"/>
            <br />
            <button type="submit">Them</button>
        </form>
    </div>
  )
}

export default update