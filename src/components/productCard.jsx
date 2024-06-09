import React, {useState} from 'react'

const ProductCard = ({image,title,category,price}) => {
  const [isHovered,setIsHovered] = useState(false);
  return (
    <div className='relative w-64 h-64 overflow-hidden rounded-lg shadow-lg '
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
        <img src={image} 
            alt={title}
            className= {`w-full h-full object-cover transform transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}/>
          <button className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold transition-opacity duration-300 ${isHovered? 'opacity-100' : 'opacity-0'}`}>Add to Cart</button>
    </div>
  )
}

export default ProductCard