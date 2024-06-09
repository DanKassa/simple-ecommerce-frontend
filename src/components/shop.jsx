import React from 'react'
import ProductCard from './productCard'
import Guitar from '../assets/guitar.jpg'
import Phone from '../assets/phone.jpg'
const shop = () => {

    const product = [
        {
            image:Phone,
            title:"Samsung Galaxy S22",
        },
        {
            image:Guitar,
            title:"Fender Stratocaster",
        }
    ]

    const products = product.map((prod) => {
        return ( <ProductCard image={prod.image} title={prod.title} />)
    })
  return (
    <div className='main_container flex gap-6 items-center h-screen bg-gray-100'>
        {products}
    </div>
  )
}

export default shop