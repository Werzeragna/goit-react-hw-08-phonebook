import React from 'react';
import { SNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <>
      <SNavLink to="/register">Registration</SNavLink>
      <SNavLink to="/login">Log in</SNavLink>
    </>
  );
}
