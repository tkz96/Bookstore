import { Link } from 'react-router-dom';
import '../styles/Header.css';
import userIcon from '../styles/user-icon.png';

export default function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <div className="header-alignment">
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/Categories">CATEGORIES</Link>
          </li>
        </ul>
        <img className="user-icon" src={userIcon} alt="user icon" />
      </div>

    </header>
  );
}
