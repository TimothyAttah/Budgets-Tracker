import { Dispatch } from "redux";
import { NotesActionsTypes } from "../actionsTypes/actionsTypes";
import { NotesTypes } from "../types";

export const noteCreate = (notes: object) => (dispatch: Dispatch) => {
  try {
    dispatch<NotesActionsTypes>({
      type: NotesTypes.NOTE_CREATE,
      payload: notes
    })
  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err.response.data.err);
    }
  }
}

export const notesLists = () => (dispatch: Dispatch) => {
  try {
    dispatch<NotesActionsTypes>({
      type: NotesTypes.NOTES_LISTS
    })
  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err.response.data.error);
    }
  }
}

export const noteList = (id: string | number) => (dispatch: Dispatch) => {
  try {
    dispatch<NotesActionsTypes>({
      type: NotesTypes.NOTE_LIST,
      payload: {id}
    })
  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err.response.data.error);
    }
  }
}

export const noteDelete = (id: string | number) => (dispatch: Dispatch) => {
  try {
    dispatch<NotesActionsTypes>({
      type: NotesTypes.NOTE_DELETE,
      payload: id
    })
  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err.response.data.error);
    }
  }
}

export const noteEdit = (id: string | number, notes: object) => (dispatch: Dispatch) => {
  try {
    dispatch<NotesActionsTypes>({
      type: NotesTypes.NOTE_EDIT,
      payload: {id, notes}
    })
  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err.response.data.error);
    }
  }
}