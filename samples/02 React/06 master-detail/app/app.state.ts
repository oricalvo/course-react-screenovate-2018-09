export interface AppState {
    groups: Group[];
    selected: Group;
}

export interface Group {
    id: number;
    name: string;
    contacts: Contact[];
}

export interface Contact {
    id: number;
    name: string;
}
