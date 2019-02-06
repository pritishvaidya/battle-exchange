import React, { useEffect, useState } from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { navigate } from 'gatsby'

import SearchBar from './search-bar'

import { SiteWrapper, SiteListWrapper, Site, Logo } from './style'

import SiteList from '../../utils/site-list'
import { CookieList, Routes } from '../../config'

function Sites({ cookies }) {
  const [siteList, filterSiteList] = useState(SiteList)

  useEffect(() => {
    cookies.remove(CookieList.default)
  }, [])

  const filterText = e => {
    const inputValue = e.target.value
    if (inputValue) {
      const filteredList = SiteList.filter(
        ({ name }) =>
          name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
      )
      return filteredList.length
        ? filterSiteList(filteredList)
        : filterSiteList(SiteList)
    } else {
      return filterSiteList(SiteList)
    }
  }

  const setCookie = siteParameter => {
    cookies.set(CookieList.default, siteParameter, {
      path: '/',
      maxAge: 3600,
    })
    return navigate(Routes.Battle.players)
  }

  return (
    <SiteWrapper>
      <SearchBar autoFocus onChange={filterText} site />
      <SiteListWrapper>
        {siteList.map(
          ({
            name,
            styling: { tag_background_color, tag_foreground_color, link_color },
            icon_url,
            high_resolution_icon_url,
            api_site_parameter,
          }) => {
            return (
              <Site
                key={name}
                background={link_color}
                color={tag_background_color}
                onClick={() => setCookie(api_site_parameter)}
              >
                {name}
                <Logo
                  srcSet={`${icon_url}, ${high_resolution_icon_url} 2x`}
                  src={icon_url}
                />
              </Site>
            )
          }
        )}
      </SiteListWrapper>
    </SiteWrapper>
  )
}

Sites.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
}

export default withCookies(Sites)
