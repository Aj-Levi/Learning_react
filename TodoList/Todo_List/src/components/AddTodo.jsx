import React, { useContext, useState } from 'react'
import { popupWrapper } from '../App.jsx'

const AddTodo = ({todos,setTodos}) => {
    let [setPopupActive,isPopupActive] = useContext(popupWrapper)

    const [search, setsearch] = useState('')

    const add = () => {
        if(search.trim() === ''){
            alert('empty string not allowed')
        }else{
            let newTodos = [...todos,{task:search,done:false}]
            setTodos(newTodos)
            setsearch('')
            setPopupActive(true)
            setTimeout(() => {
                setPopupActive(false)
            }, 3000);
        }
    }

  return (
    <div className='flex mb-4'>
        <input type="text" name="task" id="task" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Add task' className='flex-1 p-2 border border-gray-300 rounded-md' />
        <button onClick={add} className='ml-2 p-2 bg-blue-500 w-30 text-white rounded-md hover:bg-blue-600 active:scale-95'>Add</button>
    </div>
  )
}

export default AddTodo