import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () =>
  <nav className='nav'>
    <ul className='nav-items'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <a target='_blank' href='https://medium.com/@rjcolmed'>Blog</a>
      </li>
      <li>
        <a target='_blank'href='https://github.com/rjcolmed'>GitHub</a>
      </li>
      <li>
      <a target='_blank'href='https://www.linkedin.com/in/rcolonmedina/'>LinkedIn</a>
      </li>
    </ul>
  </nav>

  export default NavMenu;