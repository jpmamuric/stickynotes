import { FETCH_USERS } from '../actions/types';

const initialState = {
  list: []
};

export default (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, list: action.payload  };
    default:
      return state;
  }
}
