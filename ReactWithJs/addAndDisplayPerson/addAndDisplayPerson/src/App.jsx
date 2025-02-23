import { useEffect, useState } from "react"

function App() {
  const [People, setPeople] = useState(() => {
    let initialPeople = localStorage.getItem('People')
    return initialPeople ? JSON.parse(initialPeople) : []
  })
  const [name, setname] = useState('')
  const [age, setage] = useState('')

  useEffect(() => {
    localStorage.setItem("People", JSON.stringify(People))
  }, [People])
  
  const add = () => {
    let newPeople = [...People, { name: name, age: age }]
    setPeople(newPeople)
  }

  const remove = () => {
    let newPeople = People.filter((person) => person.name !== name)
    setPeople(newPeople)
  }

  const update = () => {
    let newPeople = People.map((person) => person.name === name ? { ...person, age: age } : person)
    setPeople(newPeople)
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{backgroundColor: "#FF3CAC",
      backgroundImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"}}>
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row md:space-x-8 w-full max-w-4xl">
        <div className="left flex-1 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">People List</h2>
          {People.length > 0 ? (
            People.map((person, index) => (
              <div key={index} className="person p-4 mb-2 border border-gray-600 rounded">
                <div className="font-medium">Name: <span className="font-normal">{person.name}</span></div>
                <div>Age: <span className="font-normal">{person.age}</span></div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No people added yet.</p>
          )}
        </div>
        <div className="right flex-1">
          <h2 className="text-xl font-bold mb-4">Manage People</h2>
          <div className="inputs mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="buttons flex flex-col space-y-3">
            <button onClick={add} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
              Add Person
            </button>
            <button onClick={remove} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200">
              Remove Person
            </button>
            <button onClick={update} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              Update Person
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
