import React, { useContext } from 'react'
import { PageType } from '../../pages'

import IconEmpty from './icon-empty'
import IconFill from './icon-fill'
import openLink from '../../utils/open-link'

import { NavWrapper, StartWrapper, LogoLink } from './style'

import { PageTypes } from '../../config'

function Nav() {
  const { pageType } = useContext(PageType)
  return (
    <NavWrapper transparent={pageType === PageTypes.Home}>
      <StartWrapper>
        <LogoLink
          link={pageType !== PageTypes.Home}
          onClick={() => openLink('', '_self')}
        >
          {pageType === PageTypes.Home ? <IconEmpty /> : <IconFill />}
          Battle Exchange
        </LogoLink>
      </StartWrapper>
    </NavWrapper>
  )
}

export default Nav
