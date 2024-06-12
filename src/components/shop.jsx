import React, {useState} from 'react'
import ProductCard from './productCard'
import Guitar from '../assets/guitar.jpg'
import Phone from '../assets/phone.jpg'
const shop = () => {
const [cart,setCart] = useState([])

const addToCart = (product) => {
    setCart([...cart,product])
}
    const prods = [
        {
            image:Phone,
            title:"Samsung Galaxy S22",
        },
        {
            image:Guitar,
            title:"Fender Stratocaster",
        }
    ]

    const products = prods.map((prod) => {
        return ( <ProductCard image={prod.image} title={prod.title} addToCart= {()=> addToCart(prod)}/>)
    })
  return (
    <div className="shop flex">
    <div className='main_container flex gap-6 items-center h-screen bg-gray-100 px-14'>
        {products}
    </div>

    <div className='cart '>
        <h1>Cart</h1>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2">
            <div className="cart-item">
              <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded-full mr-2" />
              <span>{item.title}</span>
            </div>
          </li>
          ))}
        </ul>
    </div>
    </div>
  )
}

export default shop