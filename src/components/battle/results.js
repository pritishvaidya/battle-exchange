import React from 'react'
import { Redirect } from '@reach/router'
import { Cookies, withCookies } from 'react-cookie'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts'
import PropTypes, { instanceOf } from 'prop-types'

import PlayerResult from './player-result'

import { PlayersWrapper, ResultsWrapper, ChartWrapper } from './style'
import { CookieList, Graph, Routes } from '../../config'

const categories = ['Reputation', 'Gold * 1000', 'Silver * 500', 'Bronze * 100']

function Results({ player, cookies }) {
  let result
  const siteCookie = cookies.get(CookieList.default)

  if (!(player && siteCookie)) {
    return <Redirect to={Routes.Battle.site} noThrow />
  }

  const playerResult = {}
  playerResult['player1'] =
    player['player1'].reputation +
    player['player1'].badge_counts.gold * 1000 +
    player['player1'].badge_counts.silver * 500 +
    player['player1'].badge_counts.bronze * 100
  playerResult['player2'] =
    player['player2'].reputation +
    player['player2'].badge_counts.gold * 1000 +
    player['player2'].badge_counts.silver * 500 +
    player['player2'].badge_counts.bronze * 100

  if (playerResult['player1'] > playerResult['player2']) {
    result = 'player1'
  } else if (playerResult['player1'] < playerResult['player2']) {
    result = 'player2'
  } else {
    result = 'draw'
  }

  return (
    <ResultsWrapper>
      <PlayersWrapper>
        <PlayerResult
          type={'player1'}
          result={result}
          cookie={siteCookie}
          data={player['player1']}
        />
        <PlayerResult
          type={'player2'}
          result={result}
          cookie={siteCookie}
          data={player['player2']}
        />
      </PlayersWrapper>
      <ChartWrapper result>
        <ReactHighcharts
          config={{
            ...Graph,
            title: {
              text: 'Overall Comparison',
            },
            chart: {
              ...Graph.chart,
              width:
                window.innerWidth <= 768
                  ? window.innerWidth / 1.1
                  : window.innerWidth / 1.5,
              type: 'bar',
            },
            xAxis: [
              {
                categories,
                reversed: true,
                labels: {
                  step: 1,
                },
              },
              {
                opposite: true,
                categories,
                linkedTo: 0,
                labels: {
                  step: 1,
                },
              },
            ],
            plotOptions: {
              series: {
                stacking: 'normal',
              },
            },
            tooltip: {
              formatter: function() {
                return (
                  '<b>' +
                  this.series.name +
                  ', ' +
                  this.point.category +
                  '</b><br/>' +
                  'Population: ' +
                  Highcharts.numberFormat(Math.abs(this.point.y), 0)
                )
              },
            },
            series: [
              {
                name: 'Player 1',
                data: [
                  -player['player1'].reputation,
                  -player['player1'].badge_counts.gold * 1000,
                  -player['player1'].badge_counts.silver * 500,
                  -player['player1'].badge_counts.bronze * 100,
                ],
              },
              {
                name: 'Player 2',
                data: [
                  player['player2'].reputation,
                  player['player2'].badge_counts.gold * 1000,
                  player['player2'].badge_counts.silver * 500,
                  player['player2'].badge_counts.bronze * 100,
                ],
              },
            ],
          }}
        />
      </ChartWrapper>
      <ChartWrapper result>
        <ReactHighcharts
          config={{
            ...Graph,
            title: {
              text: 'Reputation Comparison',
            },
            chart: {
              ...Graph.chart,
              width:
                window.innerWidth <= 768
                  ? window.innerWidth / 1.2
                  : window.innerWidth / 1.5,
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
              width:
                window.innerWidth <= 768
                  ? window.innerWidth / 1.2
                  : window.innerWidth / 1.5,
              type: 'column',
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
    </ResultsWrapper>
  )
}

Results.propTypes = {
  player: PropTypes.object.isRequired,
  cookies: instanceOf(Cookies).isRequired,
}

export default withCookies(Results)
