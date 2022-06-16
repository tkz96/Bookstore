import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/BookComponent';
import Form from '../Components/Form';
import Header from '../Components/Header';
import { addBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books);

  const formSubmit = (e) => {
    e.preventDefault();
    const { author, title } = e.target.elements;
  };

  dispatch(
    addBook({
      id: bookList.length,
      author: author.value,
      title: title.value,
    }),
  );

  return (
    <>
      <Header />
      <div className="book-container">
        {
          bookList.map(({ id, title, author }) => (<Book key={id} title={title} author={author} />))
        }
        <hr />

        <h2 className="title">Add New Book</h2>
        <Form handleSubmit={formSubmit} />
      </div>
    </>
  );
};

export default Books;
