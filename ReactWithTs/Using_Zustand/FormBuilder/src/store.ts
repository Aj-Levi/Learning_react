import { create } from "zustand";
import { FormStore } from "./Interfaces/StoreInterfaces.ts"

export const useFormStore = create<FormStore>((set)=>({
    formElements: [],
    label: "",
    type: "text",
    setlabel: (str: string) => {set(()=>({
        label: str
    }))},
    settype: (str: 'text' | 'number' | 'file' | 'password' | 'textarea') => {set(()=>({
        type: str
    }))},
    add: () => {set((state)=>({
        formElements: [...state.formElements,{label: state.label, type: state.type}]
    }))},
    remove: (ind: number) => {set((state)=>({
        formElements: state.formElements.filter((_,index: number)=>index!==ind)
    }))},
    reset: () => {set(()=>({
        formElements: []
    }))}
}))