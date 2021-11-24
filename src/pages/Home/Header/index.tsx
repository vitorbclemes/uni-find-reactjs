import React from 'react';
import { Container, LogoIcon, TextContainer, Text } from './styles';

import headerLogo from '../../../assets/images/logos_svg/headerLogo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoIcon src={headerLogo} />
      <TextContainer>
        <Text>Objetivo</Text>
        <Text>Sou Locador</Text>
        <Text>Quem somos?</Text>
        <Text>Contato</Text>
      </TextContainer>
    </Container>
  );
};

export default Header;
