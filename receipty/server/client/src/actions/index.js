//Zulmy- I used the template we used for FeedbackLoop//
import axios from 'axios';
import { FETCH_USER, FETCH_EXPENSES, FETCH_REPORTS } from './types';

const BASE_URL = "https://ps-receipty.herokuapp.com";

export const fetchUser = (loginObject) => async dispatch => {
    const res = await axios.post(BASE_URL + '/api/login', loginObject);
  
    dispatch({ type: FETCH_USER, payload: res.data });
  };
 

//this is the request to push new expenses to admin


  //until login is complete, hard code a user Id for a user that exists in your db here to see the add expense form work. 
  export const submitExpense = (values, history) => async dispatch => {
    const res = await axios.post(`${BASE_URL}/api/expenses/5bb26ea977074900150d3ee7`, values);
  
    history.push('/expenses');
    dispatch({ type: FETCH_USER, payload: res });
  };

  export const submitReports = (values, history) => async dispatch => {
    const res = await axios.post('/reports', values);
  
    history.push('/reports');
    dispatch({ type: FETCH_USER, payload: res.data });
  };
  

  //this is the request to request all server for expenese, rightnow of jim since he is hard coded in. 
  export const fetchExpenses = () => async dispatch => {
    const res = await axios.get();
  
    dispatch({ type: FETCH_EXPENSES, payload: res.data });
  };

  export const fetchReports = () => async dispatch => {
    const res = await axios.get('/reports');
  
    dispatch({ type: FETCH_REPORTS, payload: res.data });
  };

  //the following code are actions or requests to the reducers to incorporate these calls for data as part of the store//
  