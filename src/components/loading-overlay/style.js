import styled from 'styled-components'
import rem from '../../utils/rem'

const OverlayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: linear-gradient(
    to right,
    ${props => props.theme.gradient1},
    ${props => props.theme.gradient2}
  );
`

const Icon = styled.svg`
  width: ${rem(100)};
  animation: shift 3s ease-in-out infinite;
  transform-origin: center;
  & .shield {
    transform-origin: 42% 42%;
    animation: rotate 5s ease-in-out infinite;
  }

  @keyframes shift {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(${rem(15)});
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

export { OverlayWrapper, Icon }
