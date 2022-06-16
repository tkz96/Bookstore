import Button from './Button';

// eslint-disable-next-line react/prop-types
const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Author Name" />
    <input type="text" placeholder="Book Title" />
    <Button type="submit" title="add book" />
  </form>
);

export default Form;
