export interface SidebarStoreInterface{
    openSidebar: boolean;
    toggleSidebar: () => void;
}

export interface Note{
    id: string;
    title: string;
    color: string;
    content: string;
}

export interface NotesStoreInterface{
    notes: Note[];

    searchQuery: string;
    setSearchQuery: (str: string) => void;

    currentColor: string;
    currentTitle: string;
    currentContent: string;
    currentIndex: string|null;

    setCurrentColor: (str: string) => void;
    setCurrentTitle: (str: string) => void;
    setCurrentContent: (str: string) => void;
    setCurrentIndex: (index: string|null) => void;

    add: (id: string) => void;
    remove: (id: string) => void;
    update: (id: string) => void;
}