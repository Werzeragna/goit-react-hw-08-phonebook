import React from 'react';
import {
  HomeContainer,
  Homelink,
  Please,
  PleaseContainer,
  Title,
} from './Home.styled';

const HomeView = () => (
  <HomeContainer>
    <Title>Welcome to the phonebook </Title>
    <Please>Please</Please>
    <PleaseContainer>
      <Homelink to="/login">Log in</Homelink>
      <Please>or</Please>
      <Homelink to="/register">Register</Homelink>
    </PleaseContainer>
  </HomeContainer>
);

export default HomeView;
