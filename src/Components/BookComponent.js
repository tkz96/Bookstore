import { PropTypes } from 'prop-types';

const Book = (
  {
    category,
    title,
    author,
    progress,
    chapter,
  },
) => (

  <div>
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <div>
        <p>Comments</p>
        <p>Remove</p>
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
      <button type="button">update progress</button>
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
