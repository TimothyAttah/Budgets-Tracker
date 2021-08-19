export interface NotesList {
  _id: string | number;
  title: string;
  content: string;
  name: string;
  profilePicture: string;
  createdAt?: Date | string
}

export type Notes = {
  notes: NotesList[]
}