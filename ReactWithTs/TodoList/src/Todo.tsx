import React, { useState } from "react";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [current, setCurrent] = useState<string>("");

    const add = (task: string): void => {
        if (task.trim() === "") return;
        const newTodo: Todo = { id: todos.length + 1, task, completed: false };
        setTodos([...todos, newTodo]);
        setCurrent("");
    };

    const update = (id: number): void => {
        const updatedTodos = todos.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        setTodos(updatedTodos);
    };

    const remove = (id: number, e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        const filteredTodos = todos.filter((item) => item.id !== id);
        setTodos(filteredTodos);
    };

    return (
        <div className="h-[80vh] w-[40vw] max-lg:w-full rounded-2xl bg-gray-100 flex items-center justify-center p-4 shadow-[0_0_20px_#39ff14]">
            <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
            <div className="flex mb-4">
                <input
                type="text"
                placeholder="Add task"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                onClick={() => add(current)}
                className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                Add
                </button>
            </div>
            <div>
                {todos.map((item) => (
                <div
                    key={item.id}
                    onClick={() => update(item.id)}
                    className={`flex justify-between items-center p-4 mb-2 bg-white shadow rounded cursor-pointer transition-colors ${
                    item.completed ? "opacity-50 line-through" : ""
                    }`}
                >
                    <span>{item.task}</span>
                    <button
                    onClick={(e) => remove(item.id, e)}
                    className="bg-red-500 p-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v2H9V4a1 1 0 011-1z"
                        />
                    </svg>
                    </button>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default TodoList;
