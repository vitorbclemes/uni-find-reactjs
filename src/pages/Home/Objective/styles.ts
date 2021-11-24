import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 670px;
  margin-top: 30px;
  background: var(--container);

  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TextContainer = styled.div`
  height: 100%;
  width: 630px;
  background: var(--contrast);

  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  font-family: 'OverlockSC';
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 61px;
  text-align: center;
  color: var(--text);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-bottom: 104px;
  margin-top: 30px;
`;
export const Text = styled.h5`
  font-family: 'Open Sans Hebrew';
  font-weight: 500;
  font-size: 22px;
  line-height: 34px;
  text-align: center;
  color: var(--text);

  margin-bottom: 62px;
`;
export const ImgContainer = styled.div`
  height: 100%;
  width: 650px;
`;
export const Img = styled.img`
  position: absolute;
  width: 650px;
  height: 100%;
`;
