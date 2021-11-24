import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 670px;
  margin-top: 30px;
  background: var(--container);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.h1`
  font-family: 'Overpass';
  font-size: 50px;
  color: var(--text);

  margin-top: 80px;
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`;
export const BookIcon = styled.img`
  width: 210px;
  height: 203px;
`;
export const HouseIcon = styled.img`
  width: 215px;
  height: 203px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 100px;
`;
export const Button = styled.button`
  width: 351px;
  height: 122px;
  background: var(--button);

  > span {
    font-family: 'OverlockSC';
    font-size: 38px;
    color: var(--button-text);
  }
`;
export const SignInButton = styled.button``;
