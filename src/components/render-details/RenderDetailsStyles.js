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
