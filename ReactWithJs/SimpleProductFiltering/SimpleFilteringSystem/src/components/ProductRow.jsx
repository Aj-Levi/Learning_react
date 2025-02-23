import React from 'react'

const ProductRow = ({ name, price, stocked }) => {
  return (
    <div className={`flex justify-between items-center w-full p-2 border-b ${!stocked ? 'text-red-500' : 'text-black'}`}>
      <div className="font-medium">{name}</div>
      <div className="text-gray-600">{price}</div>
    </div>
  )
}

export default ProductRow