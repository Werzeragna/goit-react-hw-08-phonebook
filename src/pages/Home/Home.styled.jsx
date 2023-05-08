import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 36px;
  color: var(--secondary);
`;
export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  background-color: var(--secondary-bg);
`;
export const Homelink = styled(NavLink)`
  font-weight: 800;
  font-size: 30px;
  transition-duration: 800ms;
  color: var(--bg);

  :hover,
  .active {
    color: var(--accent);
    text-shadow: 0px 2px 1px rgb(178 146 171);
    font-weight: 800;
  }
`;
export const Please = styled.p`
  display: flex;
  justify-content: center;
  color: var(--secondary);
  font-size: 20px;
  font-weight: 700;
`;

export const PleaseContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
