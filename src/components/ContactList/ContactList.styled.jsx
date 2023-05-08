import styled from '@emotion/styled';

export const Contacts = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const User = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 18px;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Btn = styled.button`
  padding: 5px 15px;
  flex-basis: 15%;
  font-size: 18px;
  font-weight: 500;
  color: var(--accent-btn);
  background-color: transparent;
  border-radius: 5px;
  border: none;
  box-shadow: inset -2px -2px 5px #d1d1d1, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: var(--accent);
    background-color: var(--bg);
    box-shadow: none;
  }
`;
