import { createAction, props } from '@ngrx/store';
import { ADD_NOTE, CHECK_NOTE, DELETE_NOTE, RESTORE_STATE } from './note.action.types';

export const addNote = createAction(ADD_NOTE, props<{ inputText: string }>());

export const checkNote = createAction(CHECK_NOTE, props<{ id: string }>());

export const deleteNote = createAction(DELETE_NOTE, props<{ id: string }>());

export const restoreList = createAction(RESTORE_STATE);
