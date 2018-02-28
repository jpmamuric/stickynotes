import { FETCH_STICK_NOTES } from './types';

export const fetchStickyNotes = () => async (dispatch, getState, api) => {
  const res = await api.get('/api/stickynotes');
  dispatch({ type: FETCH_STICK_NOTES, payload: res.data });
}
