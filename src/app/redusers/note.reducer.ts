import { createReducer, on } from '@ngrx/store';
import { UUID } from 'angular2-uuid';
import * as NoteActions from '../actions/note.actions';
import { Note } from '../models/note';

export interface NoteState {
  notes: Note[];
}

export const initialState: NoteState = {
  notes: [
    {
      id: '1',
      isChecked: true,
      text: 'parampampam',
    },
    {
      id: '2',
      isChecked: false,
      text: 'sdfwrgwgrg sdfrfwf',
    },
  ],
};

export const reducer = createReducer(
  initialState,
  on(NoteActions.addNote, (state, { inputText }) => ({
    ...state,
    notes: [
      ...state.notes,
      {
        id: UUID.UUID(),
        isChecked: false,
        text: inputText,
      },
    ],
  })),
  on(NoteActions.checkNote, (state, { id }) => ({
    ...state,
    notes: state.notes.map((note) => {
      if (note.id === id) {
        return {
          id: note.id,
          isChecked: !note.isChecked,
          text: note.text,
        };
      }

      return note;
    }),
  })),
  on(NoteActions.deleteNote, (state, { id }) => ({
    ...state,
    notes: state.notes.filter((note) => {
      return note.id !== id;
    }),
  })),
  on(NoteActions.restoreList, () => initialState)
);
