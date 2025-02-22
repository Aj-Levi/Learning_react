import React from 'react'
import { GoCircle } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Task = ({todo,index,setTodos,todos}) => {

    const done = () => {
        let newTodos = [...todos]
        newTodos[index].done = !newTodos[index].done
        setTodos(newTodos)
    }

    const remove = (e) => {
      e.stopPropagation();
      console.log("hello")
        let newTodos = todos.filter((_, ind) => ind !== index)
        setTodos(newTodos)
    }

  return (
    <div onClick={done} className={`flex items-center p-2 shadow-md rounded-md mb-2 cursor-pointer ${todo.done?"bg-green-300":"bg-white"} `}>
        {todo.done?<IoIosCheckmarkCircleOutline size={25}/>:<GoCircle className='text-gray-500' size={25} />}
        <div className={`flex-1 ml-3 text-xl items-center ${todo.done && "line-through decoration-red-500 decoration-3"} `}>{todo.task}</div>
        <MdDelete onClick={remove} size={25} />
    </div>
  )
}

export default Task