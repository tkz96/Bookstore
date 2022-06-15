const books = [
  {
    id: 1,
    title: 'Sherlock Holmes',
    author: 'Sir Arthur Conan Doyle',
    progress: 42,
  },
];

export default function reducer(state = books, action) {
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

export function addBook({
  id, category, title, author, progress, chapter,
}) {
  return {
    type: 'ADD_BOOK',
    id,
    category,
    title,
    author,
    progress,
    chapter,
  };
}

export function removeBook({ id }) {
  return { type: 'REMOVE_BOOK', id };
}
