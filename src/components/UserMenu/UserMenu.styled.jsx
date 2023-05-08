import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 26px;
  text-shadow: 0px 2px 1px rgb(107 84 102);
  transition-duration: 800ms;
  color: var(--name-color);
  margin-right: 20px;

  :hover,
  &.active {
    margin-right: 20px;
    color: var(--accent);
    text-shadow: 0px 2px 1px rgb(107 84 102);
    transform: scale(1.1);
  }
`;

export const UserBtn = styled.button`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
  padding: 5px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  transition-duration: 800ms;

  :hover {
    color: var(--accent);
  }
`;
