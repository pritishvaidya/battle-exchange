import styled from 'styled-components'
import rem from '../../utils/rem'

import { media, navbarHeight } from '../../utils/sizes'

const NavWrapper = styled.nav`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: ${rem(navbarHeight)};
  letter-spacing: ${rem(0.4)};
  font-family: 'Avenir', serif;
  background: ${props => props.theme.navbar};
  transition: background 300ms ease-out;
  color: ${props => props.theme.primary};
  padding: 0 5vw 0 7vw;
  ${media.desktop`
    padding: 0 5vw 0 7vw;
  `} ${media.tablet`
    padding: 0 5vw 0 4vw;
  `} ${media.phone`
    padding: 0 5vw 0 7vw;
  `} ${media.smallPhone`
    padding: 0 5vw 0 7vw;
  `}; 
`

export { NavWrapper }
