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

export const Title = styled.h1`
  font-family: 'OverlockSC';
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  color: var(--text);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 70px;
`;

export const BottomContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
`;
export const TextContainer = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;
export const Text = styled.span`
  font-family: 'Open Sans Hebrew';
  font-weight: 500;
  font-size: 22px;
  line-height: 34px;
  text-align: center;
  color: var(--text);

  margin-top: 50px;
`;
export const ImgContainer = styled.div`
  height: 100%;
  width: 680px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Selfie = styled.img`
  height: 350px;
  width: 350x;
`;
export const Name = styled.span`
  font-family: 'Open Sans Hebrew';
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 34px;
  color: var(--text);
`;
export const SubTitle = styled.span`
  font-family: 'Open Sans Hebrew';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  text-align: center;

  color: var(--text);
`;
