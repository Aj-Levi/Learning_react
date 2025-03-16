import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNotesStore } from "../store";
import { v4 as uuidv4 } from 'uuid';
import { Note } from "../Interfaces";
import { RxUpdate } from "react-icons/rx";

const AddOrUpdateNote = () => {
  const {
    currentColor,
    currentTitle,
    currentContent,
    setCurrentColor,
    setCurrentTitle,
    setCurrentContent,
    currentIndex,
    setCurrentIndex,
    add,
    update,
    notes,
  } = useNotesStore();

  let todisplay: Note ;
  if(currentIndex){
    notes.forEach((note: Note)=>{
      if(note.id === currentIndex) todisplay = note;
    })
    console.log(todisplay!)
  }  

  return (
    <div className="flex justify-end w-screen h-screen pt-10 pb-2">
      <div className="rounded-xl w-full h-full overflow-y-auto lg:w-[69vw] p-4 flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <label htmlFor="title" className="text-xl underline">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder= {currentIndex ? todisplay!.title : "Title.."}
            value={currentTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCurrentTitle(e.target.value);
            }}
            className="text-lg grow-1 input input-primary"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <label htmlFor="title" className="self-start text-xl underline">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            rows={15}
            placeholder= {currentIndex ? todisplay!.content : "Content.."}
            value={currentContent}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setCurrentContent(e.target.value);
            }}
            className="textarea textarea-lg textarea-secondary grow-1"
          ></textarea>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-4">
            <label htmlFor="color" className="text-xl underline">
              Color
            </label>
            <input
              type="color"
              name="color"
              id="color"
              value={currentIndex? todisplay!.color : currentColor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCurrentColor(e.target.value);
              }}
            />
          </div>
          <div>
            {currentIndex? (
              <button
              className="flex items-center btn btn-secondary active:scale-95"
              onClick={() => {
                update(todisplay.id);
              }}
            >
              {" "}
              <RxUpdate /> Update note
            </button>
            ):(
              <button
              className="flex items-center btn btn-secondary active:scale-95"
              onClick={() => {
                const id = uuidv4();
                add(`${id}-note`);
                setCurrentIndex(null);
                setCurrentColor("#ff56b1");
                setCurrentContent('');
                setCurrentTitle('');
              }}
            >
              {" "}
              <FaPlus /> Add note
            </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrUpdateNote;
