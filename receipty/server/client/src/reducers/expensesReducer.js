import { FETCH_EXPENSES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EXPENSES:
      state.expenses= action.payload;
      console.log('i see ', action.payload)
      return action.payload;
    default:
      return state;
  }
}