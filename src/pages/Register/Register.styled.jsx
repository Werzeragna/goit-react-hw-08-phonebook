import styled from '@emotion/styled';

export const RegTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 36px;
  color: var(--secondary);
`;
export const RegContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  background-color: var(--secondary-bg);
`;

export const FormRegContainer = styled.form`
  display: flex;
  row-gap: 15px;
  flex-direction: column;
  align-items: center;
`;
export const RegBtn = styled.button`
  font-size: 26px;
  font-weight: 700;
  color: var(--accent-btn);
  padding: 5px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  transition-duration: 800ms;

  :hover {
    color: var(--primary);
  }
`;
export const RegInput = styled.input`
  margin: 10px 0;
  padding: 5px 10px;
  font-size: 24px;
  color: var(--secondary);
  background-color: transparent;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: inset -2px -2px 5px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
