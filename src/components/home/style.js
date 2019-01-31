import styled from 'styled-components'
import { media } from '../../utils/sizes'

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15vh 15vw 5vh 15vw;
  height: 100vh;
  ${media.desktop`
      padding: 10vh 15vw 5vh 15vw;
  `} ${media.tablet`
    padding: 10vh 10vw 5vh 10vw;
  `} ${media.phone`
    padding: 15vh 5vw 5vh 5vw;
  `} ${media.smallPhone`
    padding: 15vh 5vw 5vh 5vw;
  `};
  background: linear-gradient(to right, ${props =>
    props.theme.gradient1}, ${props => props.theme.gradient2});
`

export { HomeWrapper }
