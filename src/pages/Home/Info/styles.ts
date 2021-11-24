import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 310px;
  background: var(--button);
  margin-top: 30px;

  display: flex;
  flex-direction: row;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  margin-left: 70px;
`;
export const Title = styled.h1`
  font-family: 'Open Sans Hebrew';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;
export const Contact = styled.h2`
  font-family: 'Open Sans Hebrew';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 30px;
  text-align: center;

  margin-top: 30px;
`;
export const Advise = styled.h3`
  font-family: 'Open Sans Hebrew';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  margin-top: 50px;
`;
export const CopyrightContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-right: -30px;
`;
export const Copyright = styled.span`
  font-family: 'Open Sans Hebrew';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  text-align: center;

  margin-bottom: 10px;
`;
export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const LogoIcon = styled.img`
  width: 383px;
  height: 337px;
  margin-left: 50px;
`;
