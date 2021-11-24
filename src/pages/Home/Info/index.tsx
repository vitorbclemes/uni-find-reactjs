import React from 'react';
import {
  Container,
  ContactContainer,
  Title,
  Contact,
  Advise,
  CopyrightContainer,
  Copyright,
  LogoContainer,
  LogoIcon,
} from './styles';
import logo from '../../../assets/images/logos_png/logoBranca.png';

const Info: React.FC = () => {
  return (
    <Container>
      <ContactContainer>
        <Title>
          Quer ser um anunciante ou apoiar o projeto?
          <br />
          Envie sua proposta através de um dos meios abaixo*
        </Title>

        <Contact>
          vitorbc.oficial@gmail.com
          <br />
          47 9 9964-5227
        </Contact>

        <Advise>A equipe nunca pedirá seus dados cadastrais*</Advise>
      </ContactContainer>
      <CopyrightContainer>
        <Copyright>
          Todos os direitos de nome e imagem sao reservados a<br />
          A Casa do Universitário
          <br />
          ©Copyright 2021
        </Copyright>
      </CopyrightContainer>
      <LogoContainer>
        <LogoIcon src={logo} />
      </LogoContainer>
    </Container>
  );
};

export default Info;
