import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import Products from './pages/products'
import AddProduct from './admin/addProduct'
import Dashborad from './admin/dashborad'
import Update from './admin/update'
import { add, getAll, remove, update } from './api/products'
import ProductsDetail from './pages/productsDetail'

function App() {
  
  const [products, setProduct]= useState([])
  useEffect(()=>{
    getAll().then(({data})=> setProduct(data))
  },[])

  const delteitem =(id)=>{
    remove(id).then(()=>setProduct(products.filter((item)=> item.id !==id)))
  }
  const appItem=(product)=>{
    add(product).then(()=>setProduct([...products, product]))
  }
  const updateItem=(product)=>{
    update(product).then(()=> setProduct(products.map((item)=> item.id == product.id ? product : item)))
  }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={< Products onProduct ={products} onRemove={delteitem} />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path='/admin' element={<Dashborad getProducts={products} onRemove={delteitem} />} />
        <Route path='/admin/add' element={<AddProduct onAdd={appItem} />} />
        <Route path='/admin/update/:id' element={<Update onUpdate={updateItem} ItemUpdate={products}/>} />
      </Routes>
     
    </div>
  )
}

export default App
