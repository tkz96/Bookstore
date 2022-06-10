import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/Categories">Categories</Link>
        </li>
      </ul>
    </header>
  );
}
