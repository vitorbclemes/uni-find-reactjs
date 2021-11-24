import React from 'react';
import {
  Container,
  Title,
  BottomContainer,
  TextContainer,
  Text,
  ImgContainer,
  Selfie,
  Name,
  SubTitle,
} from './styles';
import selfie from '../../../assets/images/utils/selfie.svg';

const About: React.FC = () => {
  return (
    <Container>
      <Title>A gente te ENTENDE como ninguém!</Title>

      <BottomContainer>
        <TextContainer>
          <Text>
            A Casa do Universitário foi idealizada a fim de facilitar a vida do
            calouro e veterano universitário
          </Text>
          <Text>
            Sabemos como pode ser dificil encontrar um local para ficar em uma
            cidade completamente nova e rodeado de pessoas desconhecidas
            <br />
          </Text>
          <Text>
            De universitário para universitário, espero que possa aproveitar ao
            máximo nossa ferramenta !
          </Text>
        </TextContainer>

        <ImgContainer>
          <Selfie src={selfie}></Selfie>
          <Name>Vitor Bernstorff Clemes</Name>
          <SubTitle>
            Estudante de Ciências da Computação na Universidade Estadual de
            Santa Catarina, localizada em Joinville.
          </SubTitle>
        </ImgContainer>
      </BottomContainer>
    </Container>
  );
};

export default About;
