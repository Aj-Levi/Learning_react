import React, { createContext, useEffect, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import CheckBox from './components/CheckBox.jsx'
import ProductRow from './components/ProductRow.jsx'

export const SetSearchdata = createContext()
export const SetCheckboxdata = createContext()

const App = () => {
  const [Search, setSearch] = useState('')
  const [Checked, setChecked] = useState(false)

  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Fruits", price: "$3", stocked: true, name: "Banana" },
    { category: "Fruits", price: "$2.5", stocked: true, name: "Orange" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Vegetables", price: "$3", stocked: true, name: "Broccoli" },
    { category: "Vegetables", price: "$2.5", stocked: false, name: "Cabbage" },
    { category: "Fruits", price: "$3", stocked: true, name: "Mango" },
    { category: "Fruits", price: "$2", stocked: true, name: "Grapes" },
    { category: "Fruits", price: "$1.5", stocked: false, name: "Kiwi" },
    { category: "Vegetables", price: "$3.5", stocked: true, name: "Carrot" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Cucumber" },
    { category: "Fruits", price: "$2.5", stocked: false, name: "Lemon" },
    { category: "Fruits", price: "$3", stocked: true, name: "Papaya" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Lettuce" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Eggplant" },
    { category: "Fruits", price: "$2", stocked: true, name: "Pineapple" }
  ]

  const [Filtered, setFiltered] = useState([])

  useEffect(() => {
    let temp = []
    if (Checked) {
      if (Search === '') {
        products.forEach((product) => {
          if (product.stocked) {
            temp.push(product)
          }
        })
      } else {
        products.forEach((product) => {
          if (product.stocked && product.name.toLowerCase().includes(Search.toLowerCase())) {
            temp.push(product)
          }
        })
      }
    } else {
      if (Search === '') {
        products.forEach((product) => {
          temp.push(product)
        })
      } else {
        products.forEach((product) => {
          if (product.name.toLowerCase().includes(Search.toLowerCase())) {
            temp.push(product)
          }
        })
      }
    }
    setFiltered(temp)
  }, [Search, Checked])

  return (
    <div className='w-80 h-[60vh] overflow-auto bg-white p-6 rounded-lg shadow-md'>
      <SetSearchdata.Provider value={setSearch}>
        <SearchBar />
      </SetSearchdata.Provider>
      <SetCheckboxdata.Provider value={setChecked}>
        <CheckBox />
      </SetCheckboxdata.Provider>
      <div className='w-full mt-4'>
        {Filtered.map((product, index) => {
          return <ProductRow name={product.name} price={product.price} stocked={product.stocked} key={index} />
        })}
      </div>
    </div>
  )
}

export default App