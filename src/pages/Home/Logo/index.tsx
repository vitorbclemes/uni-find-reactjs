import React from 'react';
import { Container, LogoIcon } from './styles';
import logo from '../../../assets/images/logos_png/logo.png';

const Logo: React.FC = () => {
  return (
    <Container>
      <LogoIcon src={logo} />
    </Container>
  );
};

export default Logo;
