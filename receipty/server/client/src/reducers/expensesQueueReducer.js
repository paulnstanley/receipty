import { ADD_EXPENSES_TO_QUEUE } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
      case ADD_EXPENSES_TO_QUEUE:
        state.expenses= action.payload;
        return action.payload;
      default:
        return state;      
  }
}