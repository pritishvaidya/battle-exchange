import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ToastContainer } from 'react-toastify'
import { CookiesProvider } from 'react-cookie'
import 'react-toastify/dist/ReactToastify.min.css'

import Nav from './nav'

import './layout.css'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../theme'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <CookiesProvider>
        <ThemeProvider theme={Theme}>
          <>
            <Nav />
            {children}
            <ToastContainer />
          </>
        </ThemeProvider>
      </CookiesProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
