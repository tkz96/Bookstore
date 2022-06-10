import Button from './Button';

const Form = () => (
  <form>
    <input type="text" placeholder="Book Title" />
    <input type="text" placeholder="Author Name" />
    <Button type="submit" title="add book" />
  </form>
);

export default Form;
