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
      padding: 0 10vw 5vh 10vw;
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

const IllustrationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
`

const BattleIllustrationIcon = styled.svg`
  width: ${rem(550)};
  ${media.desktop`
    width: ${rem(700)};
    `} ${media.tablet`
    width: ${rem(550)};
  `} ${media.phone`
    width: ${rem(400)};
  `} ${media.smallPhone`
   width: ${rem(300)};
  `};
 `

const PlayerIllustrationIcon = styled.svg`
  position: relative;
  width: ${rem(350)};
  ${media.desktop`
    width: ${rem(350)};
    `} ${media.tablet`
    width: ${rem(350)};
  `} ${media.phone`
    width: ${rem(300)};
  `} ${media.smallPhone`
   width: ${rem(300)};
  `};
 `

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 5vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const BattleButton = styled.button`
  display: flex;
  background-color: ${props =>
    props.player ? props.theme.primary : props.theme.link};
  letter-spacing: ${rem(0.4)};
  font-family: 'Avenir', serif;
  color: ${props => (props.player ? props.theme.link : props.theme.primary)};
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
  ${media.desktop`
    padding: ${rem(30)} ${rem(90)};
    font-size: ${rem(30)};
  `} ${media.tablet`
    padding: ${rem(20)} ${rem(70)};
    font-size: ${rem(25)};
  `} ${media.phone`
    padding: ${rem(20)} ${rem(70)};
    font-size: ${rem(20)};
  `} ${media.smallPhone`
    padding: ${rem(16)} ${rem(60)};
    font-size: ${rem(18)};
  `};
 `

export {
  HomeWrapper,
  IllustrationWrapper,
  BattleIllustrationIcon,
  PlayerIllustrationIcon,
  ButtonWrapper,
  BattleButton,
}
