import {
  FETCH_STICKY_NOTES,
  ADD_STICKY_NOTES,
  INPUT_CHANGE_STICKY_NOTE,
  CANCEL_STICKY_NOTES,
  SAVE_STICKY_NOTE,
  ERROR_STICKY_NOTE,
} from './types';

export const fetchStickyNotes = () => async (dispatch, getState, api) => {
  const res = await api.get('/api/stickynotes');
  dispatch({ type: FETCH_STICKY_NOTES, payload: res.data });
}

export const saveStickyNote = message => async (dispatch, getState, api) => {
    console.log(message)
  try {
    // await api.post('/api/stickynotes', { message })
    // const res = await api.get('/api/stickynotes');
    // dispatch({ type: FETCH_STICKY_NOTES, payload: res.data });
  }
  catch(err) {
    dispatch({ type: ERROR_STICKY_NOTE, payload: err });
  }

  dispatch({ type: FETCH_STICKY_NOTES,  })
}

export const handleInputStickyChange = text => dispatch => {
  console.log(text)
  dispatch({ type: INPUT_CHANGE_STICKY_NOTE, payload: text });
}

export const addStickyNote = message => dispatch => {
  dispatch({ type: ADD_STICKY_NOTES })
}

export const cancelStickyNote = () => dispatch=> {
  dispatch({ type: CANCEL_STICKY_NOTES });
}
