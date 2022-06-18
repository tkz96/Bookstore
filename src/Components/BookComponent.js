import { PropTypes } from 'prop-types';
import '../styles/Books.css';

const Book = ({
  // eslint-disable-next-line react/prop-types
  cat, tit, aut, pro, cha, rmBook,
}) => (
  <div className="book-container">
    <div className="book-child1">
      <p className="book-category">{cat}</p>
      <h2 className="book-title">{tit}</h2>
      <p className="author">{aut}</p>
      <div className="book-buttons-container">
        <p className="book-buttons">Comments</p>
        <span className="Line-2" />
        <button type="button" className="book-buttons" onClick={rmBook}>Remove</button>
        <span className="Line-2" />
        <p className="book-buttons">Edit</p>
      </div>
    </div>
    <div className="book-child2">
      <div className="Oval-2" />
      <div className="progress-circle">
        <div className="Percent-Complete">{pro}</div>
        <div className="Completed">Completed</div>
      </div>
      <span className="separation-line" />
    </div>
    <div className="book-child3">
      <p className="current-chapter">CURRENT CHAPTER</p>
      <p className="chapter-number">{cha}</p>
      <button type="button" className="update-progress">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  cat: PropTypes.string.isRequired,
  tit: PropTypes.string.isRequired,
  aut: PropTypes.string.isRequired,
  pro: PropTypes.string.isRequired,
  cha: PropTypes.string.isRequired,
};

export default Book;
