import React, { useEffect } from "react";
import { useNotesStore } from "../store";
import { Note } from "../Interfaces/Interfaces";

const Sidebar = () => {
  const {
    notes,
    filteredNotes,
    searchQuery,
    setSearchQuery,
    setFilteredNotes,
    remove,
  } = useNotesStore();

  useEffect(() => {
    setFilteredNotes();
  }, [searchQuery, notes]);

  return (
    <div className="h-screen w-[30vw] p-4 bg-gray-900 text-white">
      <div className="inputbox">
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          className="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          placeholder="Search a note"
        />
      </div>
      <div className="filterednotes">
        {filteredNotes.length === 0
          ? notes.map((note: Note, index: number) => (
              <div
                key={index}
                className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-md shadow-md"
              >
                <div className="flex space-x-4 items-center">
                  <div
                    className={`h-10 w-10 bg-${note.color}-500 rounded-full`}
                  ></div>
                  <div>{note.title}</div>
                </div>
                <div>
                  <button
                    className="bg-red-600 hover:bg-red-700 rounded-md px-4 py-2 text-white"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          : filteredNotes.map((note: Note, index: number) => (
            <div
            key={index}
            className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-md shadow-md"
          >
            <div className="flex space-x-4 items-center">
              <div
                className={`h-10 w-10 bg-${note.color}-500 rounded-full`}
              ></div>
              <div>{note.title}</div>
            </div>
            <div>
              <button
                className="bg-red-600 hover:bg-red-700 rounded-md px-4 py-2 text-white"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          </div>
            ))}
      </div>
    </div>
  );
};

export default Sidebar;
