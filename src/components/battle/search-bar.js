import React from 'react'
import PropTypes from 'prop-types'

import { SearchBarWrapper, SearchBarInput } from './style'
import IconSearch from './icon-search'

function SearchBar({ autoFocus, placeholder, onChange, site }) {
  return (
    <SearchBarWrapper site={site}>
      <SearchBarInput
        onChange={onChange}
        placeholder={placeholder}
        autoCorrect="off"
        autoFocus={autoFocus}
        spellcheck="false"
        autocomplete="off"
        site={site}
      />
      <IconSearch />
    </SearchBarWrapper>
  )
}

SearchBar.defaultProps = {
  autoFocus: false,
  placeholder: 'Enter the site name...',
}

SearchBar.propTypes = {
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  site: PropTypes.string,
}
export default SearchBar
