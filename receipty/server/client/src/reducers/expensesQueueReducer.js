import { ADD_EXPENSES_TO_QUEUE } from '../actions/types';

export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case ADD_EXPENSES_TO_QUEUE:
      return state.concat(action.payload)
    default:
      return state;
  }
}
