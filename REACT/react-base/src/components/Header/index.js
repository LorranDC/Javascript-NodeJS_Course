import React from 'react';
// react-icons import is perfect
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
// 1. Using the standard import for react-router-dom
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>

      
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>

      <Link to="/profile">
        <FaUserAlt size={24} />
      </Link>
    </Nav>
  );
}