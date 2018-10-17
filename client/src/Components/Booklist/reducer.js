import { GET_BOOKS } from "./actions";

const initialState = {
  books: {}
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_BOOKS:
      return { ...state, books: data };
    default:
      return state;
  }
}
