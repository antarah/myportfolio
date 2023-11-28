import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const Div = styled.div`
  width: 600px;
  height: 500px;

  .BgAnimation__svg {
    animation: ${rotateAnimation} 10s linear infinite;
  }
`;

