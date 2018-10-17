import api from "../../utils/api";

export const GET_BOOKS = "GET_BOOKS";

export function getBooks() {
  return async function(dispatch) {
    const books = await api.getBooks();
    return dispatch({
      type: "GET_BOOKS",
      data: books.data
    });
  };
}
