import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Sign up</Link>
        </li>
        <li>
          <Link to='/leads'>Leads</Link>
        </li>
      </ul>
    </nav>
  );
}