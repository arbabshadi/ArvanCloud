import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeOut = 3000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeOut);
}