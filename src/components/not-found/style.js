import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '../../utils/sizes'
import rem from '../../utils/rem'

const BackgroundImage = styled(Img)`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 100vh;
`

const TextImage = styled(Img)`
  z-index: 1;
  width: 25vw;
  margin-bottom: 5vh;
  ${media.desktop`
      width: 40vw;
  `} ${media.tablet`
      width: 40vw;
  `} ${media.phone`
      width: 70vw;
  `} ${media.smallPhone`
      width: 70vw;
  `}; 
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  z-index: 1;
  margin: 5vh 0 5vh 0;
  font-family: 'Avenir', serif;
  font-weight: 800;
  letter-spacing: ${rem(0.4)};
  font-size: ${rem(65)};
  text-align: center;
  color: ${props => props.theme.primary};
  ${media.desktop`
      margin: 3vh 0 3vh 0;
  `} ${media.tablet`
      margin: 3vh 0 3vh 0;
  `} ${media.phone`
      margin: 3vh 0 3vh 0;
      font-size: ${rem(45)};
  `} ${media.smallPhone`
      margin: 3vh 0 3vh 0;
      font-size: ${rem(45)};
  `}; 
`

const Description = styled.div`
  z-index: 1;
  margin: 5vh 0 5vh 0;
  font-family: 'Avenir', serif;
  font-weight: 500;
  letter-spacing: ${rem(0.4)};
  font-size: ${rem(20)};
  line-height: ${rem(24)};
  max-width: 30vw;
  text-align: center;
  color: ${props => props.theme.primary};
  ${media.desktop`
      margin: 3vh 0 3vh 0;
      max-width: 50vw;
`} ${media.tablet`
      margin: 3vh 0 3vh 0;
      max-width: 60vw;
 `} ${media.phone`
      margin: 3vh 0 3vh 0;
      max-width: 70vw;
      font-size: ${rem(16)};
      line-height: ${rem(20)};
  `} ${media.smallPhone`
      margin: 3vh 0 3vh 0;
      max-width: 70vw;
      font-size: ${rem(16)};
      line-height: ${rem(20)};
  `}; 
  
`

const Button = styled.div`
  margin: 5vh 0 10vh 0;
  z-index: 1;
  border ${rem(1)} solid ${props => props.theme.primary};
  border-radius: 0.1vw;
  padding: 2vh 2vw 2vh 2vw;
  font-family: 'Avenir', serif;
  font-weight: 500;
  letter-spacing: ${rem(0.4)};
  font-size: ${rem(20)};
  line-height: ${rem(24)};
  text-align: center;
  color: ${props => props.theme.primary};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.6;
  }
  &:active {
    transform: scale(0.98);
    opacity: 0.6;
  }
  ${media.desktop`
    margin: 3vh 0 20vh 0;
`} ${media.tablet`
      margin: 3vh 0 20vh 0;
 `} ${media.phone`
    margin: 3vh 0 20vh 0;
  `} ${media.smallPhone`
    margin: 3vh 0 20vh 0;
  `}; 
`

export { BackgroundImage, Wrapper, TextImage, Title, Description, Button }
