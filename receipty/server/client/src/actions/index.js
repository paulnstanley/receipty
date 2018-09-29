import axios from 'axios';
import { FETCH_USER, FETCH_EXPENSES, FETCH_REPORTS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/login');
  
    dispatch({ type: FETCH_USER, payload: res.data });
  };
  
  export const submitExpenses = (values, history) => async dispatch => {
    const res = await axios.post('/expenses', values);
  
    history.push('/expenses');
    dispatch({ type: FETCH_USER, payload: res.data });
  };

  export const submitReports = (values, history) => async dispatch => {
    const res = await axios.post('/reports', values);
  
    history.push('/reports');
    dispatch({ type: FETCH_USER, payload: res.data });
  };
  
  export const fetchExpenses = () => async dispatch => {
    const res = await axios.get('/expenses');
  
    dispatch({ type: FETCH_EXPENSES, payload: res.data });
  };

  export const fetchReports = () => async dispatch => {
    const res = await axios.get('/reports');
  
    dispatch({ type: FETCH_REPORTS, payload: res.data });
  };
  