import { PropTypes } from 'prop-types';

const Book = ({
  // eslint-disable-next-line react/prop-types
  category, title, author, progress, chapter, removeBook,
}) => (
  <div>
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <div>
        <p>Comments</p>
        <button type="button" onClick={removeBook}>Remove</button>
        <p>Edit</p>
      </div>
    </div>
    <div>
      <div className="progress-circle">
        <div>{progress}</div>
      </div>
      <div>Completed</div>
    </div>
    <div>
      <p>Current Chapter</p>
      <p>{chapter}</p>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
