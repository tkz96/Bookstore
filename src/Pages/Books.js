import Book from '../Components/BookComponent';
import Form from '../Components/Form';
import Header from '../Components/Header';

const Books = () => (
  <>
    <Header />
    <div className="book-container">
      <Book
        cat="action"
        tit="the hunger games"
        auth="suzanne collins"
        prog="60%"
        chap="chapter 17"
      />

      <hr className="mt-5 mb-5" />

      <h2 className="title">add new Book</h2>
      <Form />
    </div>
  </>
);

export default Books;
