import styled, { keyframes } from 'styled-components'

const slideUpToBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const SlideButton = styled.button`
  animation: 1s ${slideUpToBottom} ease-out;
`