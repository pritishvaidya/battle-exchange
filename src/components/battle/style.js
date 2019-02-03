import styled from 'styled-components'
import { media } from '../../utils/sizes'
import rem from '../../utils/rem'

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15vh 2vw 0 2vw;
  ${media.desktop`
      padding: 0 15vw 5vh 15vw;
  `} ${media.tablet`
    padding: 0 10vw 5vh 10vw;
  `} ${media.phone`
    padding: 0 5vw 5vh 5vw;
  `} ${media.smallPhone`
    padding: 0 5vw 5vh 5vw;
  `};
`

const SiteListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
`

const Site = styled.button`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.background};
  letter-spacing: ${rem(0.4)};
  font-family: 'Avenir', serif;
  color: ${props => props.color};
  font-size: ${rem(20)};
  font-weight: 500;
  align-items: center;
  justify-content: center;
  margin: ${rem(15)} ${rem(15)};
  padding: ${rem(30)} ${rem(70)};
  border-radius: ${rem(20)};
  box-shadow: 0 ${rem(20)} ${rem(30)} rgba(37, 15, 138, 20%);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.9;
    box-shadow: rgba(37, 15, 138, 20%) 0 ${rem(20)} ${rem(30)} 0;
  }
  &:active {
    transform: scale(0.98);
    opacity: 0.8;
    box-shadow: rgba(37, 15, 138, 20%) 0 ${rem(5)} ${rem(30)} 0;
  }
`

const Logo = styled.img`
  height: ${rem(100)};
`
const SearchBarWrapper = styled.div`
  display: flex;
  position: relative;
  margin: ${props => (props.site ? `10vh 25vw 10vh 25vw` : `0 10vw 0 10vw`)};
  border-radius: ${rem(10)};
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 ${rem(2)} ${rem(6)} rgba(0, 0, 0, 0.05);
  ${props => props.site}
`

const SearchBarInput = styled.input`
  border: 0;
  border-radius: ${rem(10)};
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  min-width: 30vw;
  padding: 3vh 5vw 3vh 2vw;
  font-size: ${rem(30)};
  font-family: Avenir, sans-serif;
  letter-spacing: ${rem(0.4)};
  color: ${props => props.theme.searchbarText};
`

const SearchIcon = styled.svg`
  height: ${rem(40)};
  width: ${rem(40)};
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`

const PlayersWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15vh 2vw 0 2vw;
  ${media.desktop`
      padding: 0 15vw 5vh 15vw;
  `} ${media.tablet`
      padding: 0 10vw 5vh 10vw;
    `} ${media.phone`
      padding: 0 5vw 5vh 5vw;
    `} ${media.smallPhone`
      padding: 0 5vw 5vh 5vw;
    `};
`

const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15vh 2vw 0 2vw;
  ${media.desktop`
      padding: 0 15vw 5vh 15vw;
  `} ${media.tablet`
      padding: 0 10vw 5vh 10vw;
    `} ${media.phone`
      padding: 0 5vw 5vh 5vw;
    `} ${media.smallPhone`
      padding: 0 5vw 5vh 5vw;
    `};
`

export {
  SiteWrapper,
  SiteListWrapper,
  Site,
  Logo,
  SearchBarWrapper,
  SearchBarInput,
  SearchIcon,
  PlayersWrapper,
  PlayerWrapper,
}
