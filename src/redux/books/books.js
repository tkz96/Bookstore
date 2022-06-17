import BookStoreAPI from '../../bookStoreAPI';

export const fetchBooks = () => async (dispatch) => {
  const books = await BookStoreAPI.getBooks();
  if (books) {
    dispatch({ type: 'DATA_FETCHED', books });
  }
};

export function addBook({
  id, category, title, author,
}) {
  return async (dispatch) => {
    const response = await BookStoreAPI.addBook({
      id,
      title,
      author,
      category,
    });
    if (response) {
      dispatch({
        type: 'ADD_BOOK',
        id,
        category,
        title,
        author,
      });
    }
  };
}

export function removeBook({ id }) {
  return async (dispatch) => {
    const response = await BookStoreAPI.removeBook({ id });
    if (response) {
      dispatch({ type: 'REMOVE_BOOK', id });
    }
  };
}

export default function bookReducer(state = [], action) {
  if (action.type === 'DATA_FETCHED') {
    return action.books;
  }
  if (action.type === 'ADD_BOOK') {
    return [
      ...state,
      {
        id: action.id,
        category: action.category,
        title: action.title,
        author: action.author,
        progress: action.progress,
        chapter: action.chapter,
      },
    ];
  }
  if (action.type === 'REMOVE_BOOK') {
    return state.filter((book) => book.id !== action.id);
  }
  return state;
}
