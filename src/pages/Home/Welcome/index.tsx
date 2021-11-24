import React from 'react';
import {
  Container,
  Text,
  IconContainer,
  BookIcon,
  HouseIcon,
  ButtonContainer,
  Button,
} from './styles';
import book_icon from '../../../assets/images/utils/livros.png';
import house_icon from '../../../assets/images/utils/casa.png';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Text>Encontre o melhor lugar para o seu estudo</Text>

      <IconContainer>
        <BookIcon src={book_icon} />
        <HouseIcon src={house_icon} />
      </IconContainer>

      <ButtonContainer>
        <Button>
          <span>Cadastrar</span>
        </Button>
        <Button>
          <span>Já tenho conta</span>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Welcome;
