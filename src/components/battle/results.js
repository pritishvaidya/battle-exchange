import React, { useState } from 'react'
import { Redirect } from '@reach/router'
import { Cookies, withCookies } from 'react-cookie'
import ReactHighcharts from 'react-highcharts'
import PropTypes, { instanceOf } from 'prop-types'

import PlayerResult from './player-result'

import { PlayersWrapper, ResultsWrapper, ChartWrapper } from './style'
import { CookieList, Graph, Routes } from '../../config'

function Results({ player, cookies }) {
  const siteCookie = cookies.get(CookieList.default)
  const [playerResult, setPlayerResult] = useState({
    player1: null,
    player2: null,
  })

  if (!(player && siteCookie)) {
    return <Redirect to={Routes.Battle.site} noThrow />
  }

  const result =
    playerResult['player1'] > playerResult['player2'] ? 'player1' : 'player2'

  return (
    <ResultsWrapper>
      <PlayersWrapper>
        <PlayerResult
          result={result === 'player1'}
          cookie={siteCookie}
          data={player['player1']}
          fetchResult={result => {
            setPlayerResult(prevState => ({
              ...prevState,
              player1: result,
            }))
          }}
        />
        <PlayerResult
          result={result === 'player2'}
          cookie={siteCookie}
          data={player['player2']}
          fetchResult={result => {
            setPlayerResult(prevState => ({
              ...prevState,
              player2: result,
            }))
          }}
        />
      </PlayersWrapper>
      {playerResult['player1'] && playerResult['player2'] && (
        <>
          <ChartWrapper result>
            <ReactHighcharts
              config={{
                ...Graph,
                title: {
                  text: 'Reputation Comparison',
                },
                chart: {
                  ...Graph.chart,
                  width: window.innerWidth / 1.5,
                },
                series: [
                  player['player1'].reputationGraphData
                    ? {
                        ...player['player1'].reputationGraphData,
                        name: 'Player 1',
                        _colorIndex: null,
                      }
                    : { name: 'Player 1', data: [] },
                  player['player2'].reputationGraphData
                    ? {
                        ...player['player2'].reputationGraphData,
                        name: 'Player 2',
                        _colorIndex: null,
                      }
                    : { name: 'Player 1', data: [] },
                ],
              }}
            />
          </ChartWrapper>
          <ChartWrapper result>
            <ReactHighcharts
              config={{
                ...Graph,
                title: {
                  text: 'Badge Comparison',
                },
                chart: {
                  ...Graph.chart,
                  type: 'column',
                  width: window.innerWidth / 1.5,
                },
                xAxis: {
                  categories: ['Gold', 'Silver', 'Bronze'],
                  crosshair: true,
                },
                series: [
                  {
                    name: 'Player 1',
                    data: [
                      player['player1'].badge_counts.gold,
                      player['player1'].badge_counts.silver,
                      player['player1'].badge_counts.bronze,
                    ],
                  },
                  {
                    name: 'Player 2',
                    data: [
                      player['player2'].badge_counts.gold,
                      player['player2'].badge_counts.silver,
                      player['player2'].badge_counts.bronze,
                    ],
                  },
                ],
              }}
            />
          </ChartWrapper>
        </>
      )}
    </ResultsWrapper>
  )
}

Results.propTypes = {
  player: PropTypes.object.isRequired,
  cookies: instanceOf(Cookies).isRequired,
}

export default withCookies(Results)
