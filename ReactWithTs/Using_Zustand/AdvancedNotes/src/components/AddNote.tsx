import React from "react";
import { useNotesStore } from "../store";

const AddNote = () => {
  const {
    add,
    setCurrentColor,
    setCurrentTitle,
    setCurrentContent,
  } = useNotesStore();

  return (
    <div className="p-4 space-y-4">
      <div className="title">
        <input
          type="text"
          name="title"
          id="title"
          className="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCurrentTitle(e.target.value)}
          placeholder="Enter the title for the note.."
        />
      </div>
      <div className="content">
        <input
          type="text"
          name="content"
          id="content"
          className="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCurrentContent(e.target.value)}
          placeholder="Enter the content for the note.."
        />
      </div>
      <div className="color">
        <select name="color" id="color" className="rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setCurrentColor(e.target.value)}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="blue">blue</option>
          <option value="purple">purple</option>
        </select>
      </div>
      <div>
        <button className="bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 text-white" onClick={add}>Add note</button>
      </div>
    </div>
  );
};

export default AddNote;
