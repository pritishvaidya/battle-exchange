import styled, { css } from 'styled-components'
import rem from '../../utils/rem'
import { Link } from 'gatsby'

import { media, navbarHeight, mobile } from '../../utils/sizes'

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: ${rem(navbarHeight)};
  letter-spacing: ${rem(0.4)};
  font-family: 'Avenir', serif;
  background: ${props =>
    props.transparent ? 'transparent' : props.theme.navbar};
  transition: background 300ms ease-out;
  color: ${props => props.theme.primary};
  padding: 0 5vw 0 2vw;
  ${media.desktop`
      padding: 0 5vw 0 3vw;
  `} ${media.tablet`
    padding: 0 5vw 0 3vw;
  `} ${media.phone`
    padding: 0 5vw 0 3vw;
    font
  `} ${media.smallPhone`
    padding: 0 5vw 0 3vw;
  `}; 
`

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  font-size: ${rem(23)};
  letter-spacing: ${rem(0.4)};
  transform-origin: center;
  &:hover {
    & .katana-1 {
      transform: translate(${rem(100)}, ${rem(100)});
      animation-duration: 0.3s;
      animation-name: translate-katana-1;
      animation-delay: 0.3s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    & .katana-2 {
      transform: translate(${rem(-100)}, ${rem(100)});
      animation-duration: 0.3s;
      animation-name: translate-katana-2;
      animation-delay: 0s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    & .shield {
      transform: translate(${rem(0)}, ${rem(-100)});
      animation-duration: 0.3s;
      animation-name: shield;
      animation-delay: 0.6s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    & .logo-right-1 {
      transform: translate(${rem(100)}, ${rem(0)});
      animation-duration: 0.3s;
      animation-name: logo-right-1;
      animation-delay: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    & .logo-right-2 {
      transform: translate(${rem(100)}, ${rem(0)});
      animation-duration: 0.3s;
      animation-name: logo-right-2;
      animation-delay: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    & .logo-left-1 {
      transform: translate(${rem(-100)}, ${rem(0)});
      animation-duration: 0.3s;
      animation-name: logo-left-1;
      animation-delay: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    & .logo-left-2 {
      transform: translate(${rem(-100)}, ${rem(0)});
      animation-duration: 0.3s;
      animation-name: logo-left-2;
      animation-delay: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  @keyframes translate-katana-1 {
    0% {
      transform: translate(${rem(100)}, ${rem(100)});
    }
    100% {
      transform: translate(${rem(0)}, ${rem(0)});
    }
  }

  @keyframes translate-katana-2 {
    0% {
      transform: translate(${rem(-100)}, ${rem(100)});
    }
    100% {
      transform: translate(${rem(0)}, ${rem(0)});
    }
  }

  @keyframes shield {
    0% {
      transform: translate(${rem(0)}, ${rem(-100)});
    }
    100% {
      transform: translate(${rem(0)}, ${rem(0)});
    }
  }

  @keyframes logo-right-1 {
    0% {
      transform: translate(${rem(100)}, ${rem(0)});
    }
    100% {
      transform: translate(${rem(0)}, ${rem(7.5)});
    }
  }

  @keyframes logo-right-2 {
    0% {
      transform: translate(${rem(100)}, ${rem(0)});
    }
    100% {
      transform: translate(${rem(0)}, ${rem(0)});
    }
  }

  @keyframes logo-left-1 {
    0% {
      transform: translate(${rem(-100)}, ${rem(0)});
    }
    100% {
      transform: translate(${rem(0)}, ${rem(4)});
    }
  }

  @keyframes logo-left-2 {
    0% {
      transform: translate(${rem(-100)}, ${rem(0)});
    }
    100% {
      transform: translate(${rem(0)}, ${rem(11)});
    }
  }
`

const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  font-size: ${rem(16)};
  margin-left: ${rem(60)};
`

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavIcon = styled.svg`
  width: ${rem(50)};
  margin-right: ${rem(8)};
`

const SidebarWrapper = styled.div`
  align-items: center;
  justify-content: flex-start;
  display: none;
  height: ${rem(navbarHeight)};
`

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${StartWrapper}, ${MiddleWrapper}, ${EndWrapper} {
    ${mobile(css`
      display: none;
    `)};
  }
  ${SidebarWrapper} {
    ${mobile(css`
      display: flex;
    `)};
  }
`

const SidebarContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', serif;
  font-weight: 500;
  color: ${props => props.theme.link};
  flex: 0 0 auto;
  letter-spacing: ${rem(0.4)};
  padding: 3vh 5vw 0 7vw;
  font-size: ${rem(25)};
  ${media.tablet`
    padding: 3vh 5vw 0 4vw;
  `} ${media.phone`
    padding: 3vh 5vw 0 7vw;
    `} ${media.smallPhone`
    padding: 3vh 5vw 0 7vw;
  `};
  `

const SidebarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const MobileLogoLinkWrapper = styled.div`
  margin: 5vh 0 0 0;
`

const MobileExternalLinkWrapper = styled.div`
  margin-top: 4vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const NavSeparator = styled.span`
  flex: 0 0 auto;
  padding: 0 ${props => (props.logo ? '0.5vw' : '1.5vw')};
  ${media.desktop`
    padding: 0 ${props => (props.logo ? '0.5vw' : '1.3vw')};
  `}
`

const NavLink = styled(Link)`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: ${rem(0.4)};
  font-size: ${rem(16)};
  color: ${props => (props.link ? props.theme.primary : props.theme.link)};
  text-decoration: none;
  &:hover,
  &:focus {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.6;
  }
`

const LogoLink = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: ${rem(0.4)};
  font-size: ${rem(16)};
  color: ${props => props.theme.link};
  &:hover,
  &:focus {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.6;
  }
  ${media.desktop`
    `} ${media.tablet`
  `} ${media.phone`
    font-size: ${rem(0)};
  `} ${media.smallPhone`
    font-size: ${rem(0)};
  `};
 `

export {
  NavWrapper,
  NavIcon,
  StartWrapper,
  MiddleWrapper,
  EndWrapper,
  SidebarWrapper,
  NormalNavbar,
  SidebarContentWrapper,
  SidebarLogoWrapper,
  MobileLogoLinkWrapper,
  MobileExternalLinkWrapper,
  NavSeparator,
  NavLink,
  LogoLink,
}
