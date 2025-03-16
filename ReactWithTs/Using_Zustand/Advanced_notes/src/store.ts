import { create } from "zustand";
import { SidebarStoreInterface , Note , NotesStoreInterface } from "./Interfaces";

export const useSidebarStore = create<SidebarStoreInterface>((set)=>({
    openSidebar: false,
    toggleSidebar: () => {set((state)=>({
        openSidebar: !state.openSidebar
    }))}
}))

export const useNotesStore = create<NotesStoreInterface>((set)=>({
    notes: [],

    searchQuery: '',
    setSearchQuery: (str: string) => {set(()=>({
        searchQuery: str
    }))},

    currentColor: '#ff56b1',
    currentTitle: '',
    currentContent: '',
    currentIndex: null,

    setCurrentColor: (str: string) => {set(()=>({
        currentColor: str
    }))},
    setCurrentTitle: (str: string) => {set(()=>({
        currentTitle: str
    }))},
    setCurrentContent: (str: string) => {set(()=>({
        currentContent: str
    }))},
    setCurrentIndex: (index: string|null) => {set(()=>({
        currentIndex: index
    }))},

    add: (id: string) => {set((state)=>({
        notes: [...state.notes,{id, color: state.currentColor, title: state.currentTitle, content: state.currentContent}]
    }))},
    remove: (id: string) => {set((state)=>({
        notes: state.notes.filter((note: Note)=>note.id!==id)
    }))},
    update: (id: string) => {set((state)=>({
        notes: state.notes.map((note: Note) => note.id===id?{id: note.id,color: state.currentColor, title: state.currentTitle, content: state.currentContent}:note)
    }))},
}))