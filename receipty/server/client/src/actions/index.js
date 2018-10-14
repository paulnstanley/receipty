//Zulmy- I used the template we used for FeedbackLoop//
import axios from 'axios';
import { FETCH_USER, FETCH_EXPENSES, FETCH_REPORTS, ADD_EXPENSES, ADD_EXPENSES_TO_QUEUE } from './types';

//const BASE_URL = "https://ps-receipty.herokuapp.com";


export const fetchUser = (loginObject) => async dispatch => {
    const res = await axios.post('/api/login', loginObject);

    dispatch({ type: FETCH_USER, payload: res.data });
  };

  //until login is complete, hard code a user Id for a user that exists in your db here to see the add expense form work.
  export const submitExpense = (values, history) => async dispatch => {
    const res = await axios.post('/api/expenses', values);

    history.push('/expenses');
    dispatch({ type: ADD_EXPENSES, payload: res.data });

  };

  export const submitReports = (values, history) => async dispatch => {
    const res = await axios.post('/api/reports', values);

    history.push('/reports');
    dispatch({ type: FETCH_USER, payload: res.data });
  };

  export const fetchExpenses = () => async dispatch => {
    const res = await axios.get('/api/user/expenses');

    dispatch({ type: FETCH_EXPENSES, payload: res.data });
  };

  export const addExpenseToQueue = (expense) => {
    return {
      type: ADD_EXPENSES_TO_QUEUE,
      payload: expense
    };
  };

  export const fetchReports = () => async dispatch => {
    const res = await axios.get('/api/reports');
    console.log('in dispatch', res.data)
    dispatch({ type: FETCH_REPORTS, payload: res.data });
  };

  //the following code are actions or requests to the reducers to incorporate these calls for data as part of the store//
