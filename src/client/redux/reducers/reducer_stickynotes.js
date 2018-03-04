import {
  FETCH_STICKY_NOTES,
  ADD_STICKY_NOTES,
  CANCEL_STICKY_NOTES,
  ERROR_STICKY_NOTE,
  INPUT_CHANGE_STICKY_NOTE
} from '../actions/types';

const initialState = {
  list: [],
  isAdding: false,
  error: '',
  text: ''
}

export default (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_STICKY_NOTES:
      return { ...state, list: action.payload  };
    case ADD_STICKY_NOTES:
      return { ...state, isAdding: true };
    case CANCEL_STICKY_NOTES:
      return { ...state, isAdding: false };
    case ERROR_STICKY_NOTE:
      return { ...state, error: action.payload };
    case INPUT_CHANGE_STICKY_NOTE:
      return { ...state, text: action.payload };
    default:
      return state;
  }
}
