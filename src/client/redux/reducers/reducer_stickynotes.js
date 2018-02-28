import { FETCH_STICK_NOTES } from '../actions/types';

const initialState = {
  list: []
}

export default (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_STICK_NOTES:
      return { ...state, list: action.payload  };
    default:
      return state;
  }
}
