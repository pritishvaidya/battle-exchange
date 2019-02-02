import React from 'react'
import PropTypes from 'prop-types'

import { SearchBarWrapper, SearchBarInput } from './style'

function SearchBar({ onChange }) {
  return (
    <SearchBarWrapper>
      <SearchBarInput
        onChange={onChange}
        placeholder={'Enter the site name...'}
        autoCorrect="off"
        autoFocus
        spellcheck="false"
        autocomplete="off"
      />
    </SearchBarWrapper>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}
export default SearchBar
