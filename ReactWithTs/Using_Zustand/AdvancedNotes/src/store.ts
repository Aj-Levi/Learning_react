import { create } from "zustand";
import { Note , NotesStoreInterface } from "./Interfaces/Interfaces";

export const useNotesStore = create<NotesStoreInterface>((set)=>({
    notes: [{color: 'red', title: 'title1', content: 'content1 some more content here'},{color: 'blue', title: 'title2', content: 'content2 some more content here'},{color: 'green', title: 'title3', content: 'content3 some more content here'},{color: 'yellow', title: 'title4', content: 'content4 some more content here'},{color: 'purple', title: 'title5', content: 'content5 some more content here'}],

    filteredNotes: [],

    searchQuery: '',
    setSearchQuery: (str: string) => {set(()=>({
        searchQuery: str
    }))},

    currentColor: '',
    currentTitle: '',
    currentContent: '',

    setCurrentColor: (str: string) => {set(()=>({
        currentColor: str
    }))},
    setCurrentTitle: (str: string) => {set(()=>({
        currentTitle: str
    }))},
    setCurrentContent: (str: string) => {set(()=>({
        currentContent: str
    }))},

    add: () => {set((state)=>({
        notes: [...state.notes,{color: state.currentColor, title: state.currentTitle, content: state.currentContent}]
    }))},
    remove: (ind: number) => {set((state)=>({
        notes: state.notes.filter((_,index: number)=>index!==ind)
    }))},
    update: (ind: number) => {set((state)=>({
        notes: state.notes.map((note,index: number) => ind===index?{color: state.currentColor, title: state.currentTitle, content: state.currentContent}:note)
    }))},

    setFilteredNotes: () => {set((state)=>({
        filteredNotes: state.notes.filter((note: Note)=>note.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }))},
}))