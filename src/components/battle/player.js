import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from './search-bar'

import { PlayerWrapper } from './style'

function Player({ autoFocus }) {
  return (
    <PlayerWrapper>
      <SearchBar
        autoFocus={autoFocus}
        placeholder={'Enter the player name...'}
      />
    </PlayerWrapper>
  )
}

Player.propTypes = {
  autoFocus: PropTypes.bool,
}

export default Player
