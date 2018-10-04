import { FETCH_MESSAGES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      state.messages= action.payload;
      return action.payload;
    default:
      return state;
  }
}