import { v4 } from 'uuid';
import { NotesTypes } from "../types";
import { NotesActionsTypes } from "../actionsTypes/actionsTypes";
import { Notes } from "../interface";

const initialState: Notes = {
	notes: [
		{
			_id: v4(),
			title: 'Happy new year',
			content: `components modal ProfileModal js
               Line 2317 setUser is assigned a value but never used  no-unused-vars`,
			createdAt: new Date(),
		},
		{
			_id: v4(),
			title: 'Congratulations on Finishing yor projects',
			content: `components modal ProfileModal js
               Line 2317 setUser is assigned a value but never used  no-unused-vars`,
			createdAt: new Date(),
		},
		{
			_id: v4(),
			title: 'Job Opportunities',
			content: `components modal ProfileModal js
               Line 2317 setUser is assigned a value but never used  no-unused-vars`,
			createdAt: new Date(),
		},
		{
			_id: v4(),
			title: 'Thanking God',
			content: `components modal ProfileModal js
               Line 2317 setUser is assigned a value but never used  no-unused-vars`,
			createdAt: new Date(),
		},
	],
};

export const notes = (state = initialState, action: NotesActionsTypes) => {
  switch (action.type) {
    case NotesTypes.NOTE_CREATE:
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      }
    case NotesTypes.NOTES_LISTS:
      return {
        ...state
      }
    case NotesTypes.NOTE_LIST:
      return {
        ...state,
        notes: state.notes.map(note => note._id === action.payload.id ? action.payload : note)
      }
    case NotesTypes.NOTE_DELETE:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== action.payload)
      }
    case NotesTypes.NOTE_EDIT:
      return {
        ...state,
        notes: state.notes.map(note => note._id === action.payload?.id ? action.payload : note)
      }
    default:
      return {
        ...state
      }
  }
}
