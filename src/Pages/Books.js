import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/BookComponent';
import Form from '../Components/Form';
import Header from '../Components/Header';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books);

  const formSubmit = (e) => {
    e.preventDefault();
    const { author, title, category } = e.target.elements;

    dispatch(
      addBook({
        id: bookList.length,
        author: author.value,
        title: title.value,
        category: category.value,
      }),
    );
  };

  return (
    <>
      <Header />
      <div className="book-container">
        {
          bookList.map(
            ({
              id, author, title, category,
            }) => (
              <Book
                key={id}
                tit={title}
                aut={author}
                cat={category}
                pro="42"
                cha="Chapter 12"
                rmBook={() => dispatch(removeBook({ id }))}
              />
            ),
          )
        }
        <hr />

        <h2 className="title">Add New Book</h2>
        <Form handleSubmit={formSubmit} />
      </div>
    </>
  );
};

export default Books;
