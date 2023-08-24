import { ActionReducerMap } from '@ngrx/store';
import * as fromNoteReducer from './note.reducer';

export interface AppState {
  payload: fromNoteReducer.NoteState;
}

export const reducers: ActionReducerMap<AppState> = {
  payload: fromNoteReducer.reducer,
};
