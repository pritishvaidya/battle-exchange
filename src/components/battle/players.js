import React, { useState } from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { Redirect } from '@reach/router'

import Player from './player'

import { PlayersWrapper } from './style'

import { CookieList, Routes } from '../../config'

function Players({ cookies }) {
  const siteCookie = cookies.get(CookieList.default)
  const [setPlayer] = useState([{ player1: null, player2: null }])

  const submitPlayer = (player, data) => {
    return setPlayer([player], data)
  }

  if (!siteCookie) {
    return <Redirect to={Routes.Battle.site} noThrow />
  } else {
    return (
      <PlayersWrapper>
        <Player
          autoFocus
          type={'player1'}
          onSubmitPlayer={player => submitPlayer('player1', player)}
        />
        <Player
          type={'player2'}
          onSubmitPlayer={player => submitPlayer('player2', player)}
        />
      </PlayersWrapper>
    )
  }
}

Players.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
}

export default withCookies(Players)