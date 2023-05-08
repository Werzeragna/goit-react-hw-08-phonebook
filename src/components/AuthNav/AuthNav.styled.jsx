import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 25px;
  transition-duration: 800ms;
  color: var(--secondary);

  &:not(:last-child) {
    margin-right: 20px;
  }

  :hover,
  &.active {
    color: var(--accent);
  }
`;
