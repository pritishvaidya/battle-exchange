import React, { useContext } from 'react'
import { PageType } from '../../pages'

import IconEmpty from './icon-empty'
import openLink from '../../utils/open-link'

import { NavWrapper, StartWrapper, LogoLink } from './style'

import { PageTypes, Routes } from '../../config'

function Nav() {
  const { pageType } = useContext(PageType)
  return (
    <NavWrapper transparent={pageType === PageTypes.Home}>
      <StartWrapper>
        <LogoLink
          link={pageType !== PageTypes.Home}
          onClick={() => openLink(Routes.Home, '_self')}
        >
          <IconEmpty />
          Battle Exchange
        </LogoLink>
      </StartWrapper>
    </NavWrapper>
  )
}

export default Nav
