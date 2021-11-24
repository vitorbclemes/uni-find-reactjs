import styled from 'styled-components';

export const Container = styled.div`
  background: var(--gray);
  width: 100%;
  height: 84px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LogoIcon = styled.img`
  width: 300px;
  height: 240px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const Text = styled.h1`
  font-family: 'Open Sans Condensed';
  font-size: 20px;
  color: var(--header-text);

  margin-left: 150px;
`;
