import { css } from 'styled-components'
const sidebarWidth = 300
const navbarHeight = 85

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

const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner};
  }
`

const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner};
  }
`

export { sidebarWidth, navbarHeight, media, mobile, phone }
