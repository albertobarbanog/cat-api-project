import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          CatGallery
        </Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Inicio
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links'>
              Acerca de la pagina
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
