import React from 'react';
import { Container, Wrapper } from './styles';
import Header from '../Header';
import Welcome from '../Welcome';
import Objective from '../Objective';
import RealState from '../RealState';
import About from '../About';
import Info from '../Info';
import Logo from '../Logo';

const HomeLayout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Welcome />
        <Logo />
        <Objective />
        <Logo />
        <RealState />
        <Logo />
        <About />
        <Info />
      </Wrapper>
    </Container>
  );
};

export default HomeLayout;
