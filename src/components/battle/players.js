import React, { useState } from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { Redirect } from '@reach/router'

import PlayerSearch from './player-search'
import PlayerInfo from './player-info'

import { PlayersWrapper } from './style'

import { CookieList, Routes } from '../../config'

function Players({ cookies }) {
  const siteCookie = cookies.get(CookieList.default)
  const [player, setPlayer] = useState({ player1: null, player2: null })

  const submitPlayer = (playerStatus, data) => {
    setPlayer({ ...player, [playerStatus]: data })
  }

  if (!siteCookie) {
    return <Redirect to={Routes.Battle.site} noThrow />
  } else {
    return (
      <PlayersWrapper>
        {player['player1'] ? (
          <PlayerInfo cookie={siteCookie} data={player['player1']} />
        ) : (
          <PlayerSearch
            autoFocus
            type={'player1'}
            cookie={siteCookie}
            onSubmitPlayer={player => submitPlayer('player1', player)}
          />
        )}
        {player['player2'] ? (
          <PlayerInfo cookie={siteCookie} data={player['player2']} />
        ) : (
          <PlayerSearch
            type={'player2'}
            cookie={siteCookie}
            onSubmitPlayer={player => submitPlayer('player2', player)}
          />
        )}
      </PlayersWrapper>
    )
  }
}

Players.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
}

export default withCookies(Players)
