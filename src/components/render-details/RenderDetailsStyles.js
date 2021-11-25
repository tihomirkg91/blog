import styled from 'styled-components';

export const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: white;

  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -10;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  }
`;
export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

export const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

export const CenterButton = styled(LeftButton)`
  background: grey;
  opacity: 0.7;
  color: white;
`;

export const Buttons = styled.div``;
