import { useContext } from 'react'
import { SetSearchdata } from '../App.jsx'

const SearchBar = () => {
  const setSearch = useContext(SetSearchdata)

  return (
    <div className="w-full">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search.."
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg"
        onChange={(e) => { setSearch(e.target.value) }}
      />
    </div>
  )
}

export default SearchBar