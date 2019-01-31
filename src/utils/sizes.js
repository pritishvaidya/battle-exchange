import { css } from 'styled-components'
const sidebarWidth = 300
const navbarHeight = 70

const sizes = {
  giant: 1281,
  desktop: 1025,
  tablet: 768,
  phone: 481,
  smallPhone: 320,
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export { sidebarWidth, navbarHeight, media }
