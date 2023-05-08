import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { SNavLink } from './../AuthNav/AuthNav.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <SNavLink to="/contacts">Contacts</SNavLink>
      ) : (
        <SNavLink to="/">Home</SNavLink>
      )}
    </nav>
  );
};

export default Navigation;
