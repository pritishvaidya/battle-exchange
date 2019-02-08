import React, { useState } from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { Redirect } from '@reach/router'
import { navigate } from 'gatsby'

import PlayerSearch from './player-search'
import PlayerInfo from './player-info'

import { PlayersWrapper } from './style'
import { BattleButton, ButtonWrapper } from '../home/style'

import { CookieList, Routes } from '../../config'

function Players({ cookies }) {
  const siteCookie = cookies.get(CookieList.default)
  const [player, setPlayer] = useState({ player1: null, player2: null })

  const submitPlayer = (playerStatus, data) => {
    setPlayer({ ...player, [playerStatus]: data })
  }

  const submitGraph = (playerStatus, data) => {
    setPlayer({
      ...player,
      [playerStatus]: {
        ...player[playerStatus],
        reputationGraphData: data,
      },
    })
  }

  const clear = playerStatus => {
    setPlayer({ ...player, [playerStatus]: null })
  }

  if (!siteCookie) {
    return <Redirect to={Routes.Battle.site} noThrow />
  } else {
    return (
      <PlayersWrapper>
        {player['player1'] ? (
          <PlayerInfo
            clear={() => clear('player1')}
            cookie={siteCookie}
            data={player['player1']}
            onSubmitGraph={data => submitGraph('player1', data)}
          />
        ) : (
          <PlayerSearch
            autoFocus
            type={'player1'}
            cookie={siteCookie}
            onSubmitPlayer={player => submitPlayer('player1', player)}
          />
        )}
        {player['player2'] ? (
          <PlayerInfo
            clear={() => clear('player2')}
            cookie={siteCookie}
            data={player['player2']}
            onSubmitGraph={data => submitGraph('player2', data)}
          />
        ) : (
          <PlayerSearch
            type={'player2'}
            cookie={siteCookie}
            onSubmitPlayer={player => submitPlayer('player2', player)}
          />
        )}
        {player['player1'] && player['player2'] && (
          <ButtonWrapper>
            <BattleButton
              player
              onClick={() =>
                navigate(Routes.Battle.results, { state: { player } })
              }
            >
              Fight
            </BattleButton>
          </ButtonWrapper>
        )}
      </PlayersWrapper>
    )
  }
}

Players.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
}

export default withCookies(Players)
