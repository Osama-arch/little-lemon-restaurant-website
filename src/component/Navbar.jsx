import { Link, useLocation } from 'react-router-dom';
function Navbar({ locate, aboutRef, menuRef }) {
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const pathMatchHash = (hash) => {
    if (hash === location.hash) {
      return true;
    }
  };
  const handleClick = (root) => {
    const element = document.getElementById(root);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <nav
      className={
        locate === 'header'
          ? 'header-nav'
          : locate === 'sidebar'
          ? 'side-nav '
          : 'footer-nav'
      }>
      <ul className='navbar '>
        <li>
          <Link
            to='/'
            className={
              pathMatchRoute('/') && pathMatchHash('') ? 'active' : null
            }
            onClick={() => {
              scrollTop();
            }}>
            home
          </Link>
        </li>
        <li>
          <Link
            to='/#about'
            className={
              pathMatchRoute('/') && pathMatchHash('#about') ? 'active' : null
            }
            onClick={() => {
              handleClick('about');
            }}>
            about
          </Link>
        </li>
        <li>
          <Link
            to='/#menu'
            className={
              pathMatchRoute('/') && pathMatchHash('#menu') ? 'active' : null
            }
            onClick={() => {
              handleClick('menu');
            }}>
            Menu
          </Link>
        </li>
        <li>
          <Link
            to='/reservation'
            className={pathMatchRoute('/reservation') ? 'active' : null}>
            reservations
          </Link>
        </li>
        <li>
          <a>order online</a>
        </li>
        <li>
          <a>login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
