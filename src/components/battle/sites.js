import React, { useState } from 'react'

import SearchBar from './search-bar'

import { SiteWrapper, SiteListWrapper, Site, Logo } from './style'

import SiteList from '../../utils/site-list'

function Sites() {
  const [siteList, filterSiteList] = useState(SiteList)

  const filterText = e => {
    const inputValue = e.target.value
    if (inputValue) {
      const filteredList = siteList.filter(
        ({ name }) =>
          name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
      )
      return filterSiteList(filteredList)
    } else {
      return filterSiteList(SiteList)
    }
  }

  return (
    <SiteWrapper>
      <SearchBar onChange={filterText} />
      <SiteListWrapper>
        {siteList.map(
          ({
            name,
            styling: { tag_background_color, tag_foreground_color, link_color },
            icon_url,
            high_resolution_icon_url,
          }) => {
            return (
              <Site
                key={name}
                background={link_color}
                color={tag_background_color}
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

export default Sites
