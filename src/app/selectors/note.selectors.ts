import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNoteReducer from '../redusers/note.reducer';

export const featureKey = 'payload';
export const payloadFeature = createFeatureSelector<fromNoteReducer.NoteState>(featureKey);

export const getNotes = createSelector(  
  payloadFeature,
  (state: fromNoteReducer.NoteState) => state ? state.notes : []
);
