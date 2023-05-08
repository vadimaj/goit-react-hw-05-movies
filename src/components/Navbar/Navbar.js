import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? css['navbar-link-active'] : css['navbar-link']
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? css['navbar-link-active'] : css['navbar-link']
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};
export default Navbar;
