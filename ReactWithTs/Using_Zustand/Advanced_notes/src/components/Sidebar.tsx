import React from "react";
import { useSidebarStore } from "../store";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useNotesStore } from "../store";
import { MdDelete } from "react-icons/md";
import { Note } from "../Interfaces";

const Sidebar = () => {
  const { openSidebar, toggleSidebar } = useSidebarStore();
  const {
    notes,
    searchQuery,
    setSearchQuery,
    remove,
    setCurrentIndex,
    setCurrentColor,
    setCurrentContent,
    setCurrentTitle,
  } = useNotesStore();

  const closeSidebar = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleSidebar();
  };

  let filtereNotes: Note[] = notes.filter((note: Note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-10 w-screen h-screen bg-black ${
          openSidebar ? "opacity-50" : "hidden"
        } lg:hidden`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          closeSidebar(e);
        }}
      ></div>
      <div
        className={`text-stone-950 h-screen w-[45vw] lg:w-[30vw] max-sm:w-screen fixed left-0 z-20 bg-slate-500 transition-transform duration-700 rounded-r-xl ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="relative w-full">
          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search notes.."
            className="w-[90%] block pr-4 pl-11 py-2 mt-2 mx-auto text-white rounded-2xl bg-stone-800"
          />
          <FaSearch className="absolute text-white left-9 top-3" />
        </div>
        <div className="flex flex-col mt-4 gap-y-4 w-[95%] h-[80vh] overflow-y-auto mx-auto">
          {filtereNotes.length > 0 ? (
            filtereNotes.map((note: Note) => (
              <div
                key={note.id}
                className="flex items-center justify-between p-4 text-white bg-stone-800 rounded-2xl"
                onClick={() => {
                  setCurrentIndex(note.id);
                  setCurrentColor("#ff56b1");
                  setCurrentTitle("");
                  setCurrentContent("");
                }}
              >
                <div className="flex items-center gap-x-4">
                  <div
                    className="z-40 w-4 h-4 rounded-full"
                    style={{ backgroundColor: note.color }}
                  ></div>
                  <div> {note.title} </div>
                </div>
                <button
                  className="text-red-500 cursor-pointer active:scale-95"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    remove(note.id);
                  }}
                >
                  {" "}
                  <MdDelete size={23} />{" "}
                </button>
              </div>
            ))
          ) : (
            <div className="flex items-center p-4 text-white bg-stone-800 rounded-2xl">
              Your notes will appear here..
            </div>
          )}
        </div>
        <div>
          <button
            className="flex items-center mx-auto btn btn-primary active:scale-95"
            onClick={() => {
              setCurrentIndex(null);
              setCurrentColor("#ff56b1");
              setCurrentTitle("");
              setCurrentContent("");
            }}
          >
            {" "}
            <FaPlus /> Add note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
