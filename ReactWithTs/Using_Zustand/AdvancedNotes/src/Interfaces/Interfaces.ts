export interface Note{
    color: string;
    title: string;
    content: string;
}

export interface NotesStoreInterface{
    notes: Note[];

    filteredNotes: Note[];

    searchQuery: string;
    setSearchQuery: (str: string) => void;

    currentColor: string;
    currentTitle: string;
    currentContent: string;

    setCurrentColor: (str: string) => void;
    setCurrentTitle: (str: string) => void;
    setCurrentContent: (str: string) => void;

    add: () => void;
    remove: (ind: number) => void;
    update: (ind: number) => void;

    setFilteredNotes: () => void;
}