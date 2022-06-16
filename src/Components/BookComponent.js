import { PropTypes } from 'prop-types';

const Book = ({
  // eslint-disable-next-line react/prop-types
  cat, tit, aut, pro, cha, rmBook,
}) => (
  <div>
    <div>
      <p>{cat}</p>
      <h2>{tit}</h2>
      <p>{aut}</p>
      <div>
        <p>Comments</p>
        <button type="button" onClick={rmBook}>Remove</button>
        <p>Edit</p>
      </div>
    </div>
    <div>
      <div className="progress-circle">
        <div>{pro}</div>
      </div>
      <div>Completed</div>
    </div>
    <div>
      <p>Current Chapter</p>
      <p>{cha}</p>
      <button type="button">Update Progress</button>
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
