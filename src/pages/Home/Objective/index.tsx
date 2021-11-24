import React from 'react';
import {
  Container,
  TextContainer,
  Title,
  Text,
  ImgContainer,
  Img,
} from './styles';
import PeopleImg from '../../../assets/images/utils/objetivo.jpg';

const Objective: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Junte-se a centenas de estudantes por todo Brasil</Title>
        <Text>Encontre um companheiro para dividir estadia</Text>
        <Text>Divulgue vagas que você conhece</Text>
        <Text>Está com um grupo fechado? Encontre o local ideal</Text>
      </TextContainer>
      <ImgContainer>
        <Img src={PeopleImg}></Img>
      </ImgContainer>
    </Container>
  );
};

export default Objective;
