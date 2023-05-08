import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 5px 10px;
  width: 100%;
  outline: none;
  font-size: 24px;
  color: var(--secondary);
  background-color: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: inset -2px -2px 5px #d1d1d1, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Btn = styled.button`
  padding: 10px 25px;
  margin: 0 130px;
  font-size: 24px;
  font-weight: 500;
  color: var(--accent-btn);
  background-color: transparent;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  box-shadow: inset -2px -2px 5px #d1d1d1, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  :hover {
    color: var(--accent);
    background-color: var(--bg);
    box-shadow: none;
  }
`;
