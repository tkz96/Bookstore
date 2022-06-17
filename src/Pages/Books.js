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
    // const { author, title, category } = e.target.elements;
    const author = e.target.elements[0].value;
    const title = e.target.elements[1].value;
    const category = e.target.elements[2].value;
    // console.log(e.target.elements[0].value);

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
      <div className="book-container">
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
