import { DECREMENT, INCREMENT } from "../actions/types";

export default function reducer(state = 0, action) {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return 0;
  }
}
