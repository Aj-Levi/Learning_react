export interface InpField{
    label: string;
    type: 'text' | 'number' | 'file' | 'password' | 'textarea';
}

export interface FormStore{
    formElements: InpField[];
    label: string;
    type: 'text' | 'number' | 'file' | 'password' | 'textarea';
    setlabel: (label: string) => void;
    settype: (type: 'text' | 'number' | 'file' | 'password' | 'textarea') => void;
    add: () => void;
    remove: (ind: number) => void;
    reset: () => void;
}