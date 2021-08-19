export interface NotesList {
  _id: string | number;
  title: string;
  content: string;
  createdAt?: Date | string
}

export type Notes = {
  notes: NotesList[]
}