import { useState } from 'react';
import { logIn } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import {
  LoginContainer,
  LoginTitle,
  FormContainer,
  LoginBtn,
  LoginInput,
} from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <LoginContainer>
      <LoginTitle>Log in form</LoginTitle>
      <FormContainer onSubmit={handleSubmit}>
        <LoginInput
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <LoginInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <LoginBtn type="submit">Log in</LoginBtn>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
