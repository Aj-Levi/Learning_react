import React, { useState } from 'react'
import products from '../data/products.js'
import Card from './Card.jsx'

const Testimonials = () => {

    const [CurrentIndex, setCurrentIndex] = useState(0)

  return (
    <div className='flex flex-col'>
        <div className='flex gap-x-4'>
            {products[CurrentIndex].map((product)=>{
                return <Card key={product.id} imageURL={product.image} title={product.name} rating={product.rating} price={product.price} />
            })}
        </div>
        <div className="flex justify-center mt-4 gap-x-4">
            <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={CurrentIndex === 0}
            >
                Prev
            </button>
            <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
                onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, products.length - 1))}
                disabled={CurrentIndex === products.length - 1}
            >
                Next
            </button>
        </div>
    </div>
  )
}

export default Testimonials