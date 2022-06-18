import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/BookComponent';
import Form from '../Components/Form';
import Header from '../Components/Header';
import { addBook, removeBook, fetchBooks } from '../redux/books/books';
import '../styles/Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books);
  useEffect(() => { dispatch(fetchBooks()); }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    const author = e.target.elements[0].value;
    const title = e.target.elements[1].value;
    const category = e.target.elements[2].value;

    dispatch(
      addBook({
        id: bookList.length + 1,
        author,
        title,
        category,
      }),
    );
  };

  return (
    <>
      <Header />
      <div className="book-page">
        {
          bookList.map(
            ({
              id, author, title, category,
            }) => (
              <Book
                key={id}
                cat={category}
                tit={title}
                aut={author}
                pro="42%"
                cha="Chapter 12"
                rmBook={() => dispatch(removeBook({ id }))}
              />
            ),
          )
        }
        <hr className="form-separator" />
        <div className="form-section">
          <h2 className="form-title">ADD NEW BOOK</h2>
          <Form handleSubmit={formSubmit} />
        </div>
      </div>
    </>
  );
};

export default Books;
