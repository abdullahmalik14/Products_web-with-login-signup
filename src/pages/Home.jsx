import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImgMediaCard from '../components/Card'
import { Navbar_Component } from './navbar'


const Home = () => {
   const [products,setProducts] = useState([])

    const getData = ()=>{
        const data = axios.get("https://fakestoreapi.com/products").then((res)=>{
            // console.log(res.data);
            setProducts(res.data)

        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(products);
  return (
    <>
    <Navbar_Component/>
    
    <div style={{display:"flex",flexWrap:"wrap", gap:"6"}}>
        {
            products.map((e,i)=>{
                return (
                    <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 px-2 mb-4">
                    <ImgMediaCard
                        
                        desc={e.description}
                        title={e.title}
                        image={e.image}
                        id={e.id}
                        price={e.price}
                        category={e.category}
                    />
                </div>
                )
            })
        }
    </div>
    
    </>
  )
}

export default Home