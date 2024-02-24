import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ImgMediaCard from '../components/Card'
import { Button } from '@mui/material'

const ProductDetails = () => {
  const navigate = useNavigate()

    const {id} = useParams()
const [singleProduct,setSingleProduct]= useState('')

useEffect(() => {
  const fetchshowdetails = axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      setSingleProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
const Back_to_handle= () => {
  navigate('/home');
}
  return (
    <div className='grid justify-center items-center'>
      <ImgMediaCard
      title={singleProduct.title}
      image={singleProduct.image}
      desc={singleProduct.description}
      price={singleProduct.price}
      category={singleProduct.category}
      
      
      />
        <button className='bg-blue-500 py-3 px-2 border rounded text-white font-bold mt-2' onClick={Back_to_handle}>Back to Home page</button>
        
    </div>
  )
}

export default ProductDetails