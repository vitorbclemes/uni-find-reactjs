import React from 'react';
import {
  Container,
  UpperContainer,
  Text,
  HouseIcon,
  BottomContainer,
  DolarIcon,
  ProfileIcon,
  LikeIcon,
} from './styles';
import houseIcon from '../../../assets/images/locator/houseIcon.png';
import dolarIcon from '../../../assets/images/locator/dolarIcon.png';
import profileIcon from '../../../assets/images/locator/profileIcon.png';
import likeIcon from '../../../assets/images/locator/likeIcon.png';

const RealState: React.FC = () => {
  return (
    <Container>
      <UpperContainer>
        <Text>Sua marca</Text>
        <HouseIcon src={houseIcon} />
        <Text>à vista!</Text>
      </UpperContainer>
      <BottomContainer>
        <DolarIcon src={dolarIcon} />
        <ProfileIcon src={profileIcon} />
        <LikeIcon src={likeIcon} />
      </BottomContainer>
    </Container>
  );
};

export default RealState;
