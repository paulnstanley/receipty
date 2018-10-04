import { FETCH_EXPENSES, ADD_EXPENSES } from '../actions/types';

export default function(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_EXPENSES:
      state.expenses= action.payload;
      return action.payload;
    default:
      return state;      
  }
}