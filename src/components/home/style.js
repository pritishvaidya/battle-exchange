import styled from 'styled-components'
import { media } from '../../utils/sizes'
import rem from '../../utils/rem'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15vw 5vh 15vw;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  ${media.desktop`
      padding: 0 15vw 5vh 15vw;
  `} ${media.tablet`
    padding: 0 10vw 5vh 10vw;
  `} ${media.phone`
    padding: 0 5vw 5vh 5vw;
  `} ${media.smallPhone`
    padding: 0 5vw 5vh 5vw;
  `};
  background: linear-gradient(to right, ${props =>
    props.theme.gradient1}, ${props => props.theme.gradient2});
`

const BattleIllustrationIcon = styled.svg`
  width: ${rem(550)};
`

const BattleButton = styled.button`
  display: flex;
  background-color: ${props => props.theme.link};
  letter-spacing: ${rem(0.4)};
  font-family: 'Avenir', serif;
  color: ${props => props.theme.primary};
  font-size: ${rem(20)};
  font-weight: 500;
  align-items: center;
  padding: ${rem(20)} ${rem(70)};
  border-radius: ${rem(50)};
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

export { HomeWrapper, BattleIllustrationIcon, BattleButton }
