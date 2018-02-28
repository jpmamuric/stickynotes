import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
}
