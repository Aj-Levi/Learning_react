import AddNote from "./components/AddNote"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <AddNote />
    </div>
  )
}

export default App