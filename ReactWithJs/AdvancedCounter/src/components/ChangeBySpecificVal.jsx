import React, { useReducer, useState } from 'react'

const Complexcounter2 = () => {

    const [change, setChange] = useState('')
    
    const reducer = (state,action) => {
        if(action.type==='inc') {
            setChange('')
            return({...state,count : state.count+Number(action.value)})
        }
        if(action.type==='dec') {
            setChange('')
            return({...state,count : state.count-Number(action.value)})
        }
        if(action.type==='reset') {
            setChange('')
            return({...state,count : 0})
        }
    }
    const [state, dispatch] = useReducer(reducer, {count : 0})
    

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Counter</h1>
                <div className="text-center mb-4">
                    <p className="text-xl font-medium">
                        Count: <span className="text-indigo-600">{state.count}</span>
                    </p>
                </div>
                <div className="mb-4">
                    <label htmlFor="change" className="block text-sm font-medium text-gray-700 mb-1">
                        Change by:
                    </label>
                    <input 
                        type="text" 
                        id="change" 
                        name="changeBy" 
                        placeholder="Enter value" 
                        value={change}
                        onChange={(e) => setChange(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-indigo-500"
                    />
                </div>
                <div className="flex justify-between gap-x-2">
                    <button 
                        onClick={() => dispatch({type: 'inc', value: change})}
                        className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
                    >
                        +
                    </button>
                    <button 
                        onClick={() => dispatch({type: 'dec', value: change})}
                        className="w-1/3 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
                    >
                        -
                    </button>
                    <button 
                        onClick={() => dispatch({type: 'reset'})}
                        className="w-1/3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
                    >
                        reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Complexcounter2