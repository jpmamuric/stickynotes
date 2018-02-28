import { FETCH_USERS } from './types';
//import axios  from 'axios' USE for 3rd party url api calls

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({ type: FETCH_USERS, payload: res.data });
}
