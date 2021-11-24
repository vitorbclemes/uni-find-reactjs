import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 670px;
  margin-top: 30px;
  background: var(--container);

  display: flex;
  flex-direction: column;
`;
export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 335px;
  width: 100%;
  margin-left: 140px;
  align-items: center;
`;
export const Text = styled.h1`
  font-family: 'OpenSymbol';
  font-style: normal;
  font-weight: normal;
  font-size: 43px;
  line-height: 61px;
  text-align: center;
  color: var(--text);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const HouseIcon = styled.img`
  width: 549.07px;
  height: 490.04px;
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const DolarIcon = styled.img`
  width: 320px;
  height: 300px;
`;
export const ProfileIcon = styled.img`
  width: 320px;
  height: 300px;
`;
export const LikeIcon = styled.img`
  width: 320px;
  height: 300px;
`;
