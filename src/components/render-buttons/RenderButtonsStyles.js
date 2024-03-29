import styled from 'styled-components';

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
