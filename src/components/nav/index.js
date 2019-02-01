import React, { useContext } from 'react'
import { PageType } from '../../pages'

import IconEmpty from './icon-empty'
import IconFill from './icon-fill'
import openLink from '../../utils/open-link'

import { NavWrapper, StartWrapper, LogoLink } from './style'

function Nav() {
  const { pageType } = useContext(PageType)
  return (
    <NavWrapper>
      <StartWrapper>
        <LogoLink to={''} onClick={() => openLink('', '_self')}>
          {pageType === 'Home' ? <IconEmpty /> : <IconFill />}
          Battle Exchange
        </LogoLink>
      </StartWrapper>
    </NavWrapper>
  )
}

export default Nav
