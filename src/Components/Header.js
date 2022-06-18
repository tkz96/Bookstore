import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/Categories">CATEGORIES</Link>
        </li>
      </ul>
    </header>
  );
}
