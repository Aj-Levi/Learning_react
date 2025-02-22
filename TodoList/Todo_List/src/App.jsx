import { createContext, useEffect, useState } from "react";
import AddTodo from "./components/AddTodo.jsx";
import Task from "./components/Task.jsx";
import Popup from "./components/Popup.jsx";

export const popupWrapper = createContext();

const App = () => {
  const [isPopupActive, setPopupActive] = useState(false);

  const [todos, setTodos] = useState(() => {
    let initialTodos = localStorage.getItem("Todos");
    return initialTodos ? JSON.parse(initialTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <popupWrapper.Provider value={[setPopupActive,isPopupActive]}>
      <div className="h-screen w-screen bg-gray-700 flex items-center justify-center">
        <Popup />
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4 underline underline-offset-4">
            Todo List
          </h1>
          <AddTodo setTodos={setTodos} todos={todos} />
          <div>
            {todos.map((todo, index) => {
              return (
                <div key={index}>
                  <Task
                    todo={todo}
                    index={index}
                    setTodos={setTodos}
                    todos={todos}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </popupWrapper.Provider>
  );
};

export default App;
