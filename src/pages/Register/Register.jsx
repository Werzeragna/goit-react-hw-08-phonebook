import { useState } from 'react';
import { register } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import {
  RegContainer,
  RegTitle,
  FormRegContainer,
  RegBtn,
  RegInput,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegContainer>
      <RegTitle>Registration</RegTitle>
      <FormRegContainer onSubmit={handleSubmit}>
        <RegInput
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <RegInput
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <RegInput
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <RegBtn type="submit">Registration</RegBtn>
      </FormRegContainer>
    </RegContainer>
  );
};

export default Register;
