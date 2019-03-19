import React, { useEffect, useState } from 'react'
import { Redirect, Location } from '@reach/router'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import PlayerResult from './player-result'
import LoadingOverlay from '../loading-overlay'

import { PlayersWrapper, ResultsWrapper, ChartWrapper } from './style'
import { Graph, Routes, StackExchange } from '../../config'

import FetchList from '../../utils/fetch-list'
import SiteList from '../../utils/site-list'

const categories = ['Reputation', 'Gold * 1000', 'Silver * 500', 'Bronze * 100']

function Results({ location }) {
  const [loading, setLoading] = useState(true)
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)
  const playerResult = {}
  let result = 'draw'
  const params = queryString.parse(location.search)

  if (!params['id1'] || !params['id2'] || !params['site']) {
    return <Redirect to={Routes.Battle.site} noThrow />
  }

  async function fetchGraphData(id, playerStatus) {
    const currentSite = SiteList.filter(
      ({ api_site_parameter }) => api_site_parameter === params['site']
    )
    const name = currentSite.length && currentSite[0].name
    setLoading(true)
    const response = await fetch('/.netlify/functions/fetch-graph-data', {
      method: 'POST',
      body: JSON.stringify({ id, name }),
    })
    const reputationGraphData = await response.json()
    if (reputationGraphData) {
      if (playerStatus === 'player1') {
        setPlayer1(prevState => ({ ...prevState, reputationGraphData }))
      } else {
        setPlayer2(prevState => ({ ...prevState, reputationGraphData }))
      }
    } else {
      if (playerStatus === 'player1') {
        setPlayer1(prevState => ({ ...prevState, reputationGraphData: [] }))
      } else {
        setPlayer2(prevState => ({ ...prevState, reputationGraphData: [] }))
      }
    }
    setLoading(false)
  }

  async function fetchPlayerData(id, playerStatus) {
    setLoading(true)
    const data = await FetchList(`${StackExchange.User}/${id}`, {
      site: params.site,
      key: StackExchange.Key,
    })
    if (data && data.length) {
      if (playerStatus === 'player1') {
        setPlayer1({
          ...player1,
          reputation: data[0].reputation,
          badges: data[0].badge_counts,
          profile_image: data[0].profile_image,
          display_name: data[0].display_name,
        })
      } else {
        setPlayer2({
          ...player2,
          reputation: data[0].reputation,
          badges: data[0].badge_counts,
          profile_image: data[0].profile_image,
          display_name: data[0].display_name,
        })
      }
      fetchGraphData(data[0].account_id, playerStatus)
    } else {
      if (playerStatus === 'player1') {
        setPlayer1(null)
      } else {
        setPlayer2(null)
      }
    }
    setLoading(false)
  }

  /*eslint-disable*/
  useEffect(
    () => {
      fetchPlayerData(params['id1'], 'player1')
    },
    [params['id1']]
  )

  useEffect(
    () => {
      fetchPlayerData(params['id2'], 'player2')
    },
    [params['id2']]
  )
  /*eslint-enable*/

  if (loading || !(player1 && player2)) {
    return <LoadingOverlay />
  }

  playerResult['player1'] =
    player1.reputation +
    player1.badges.gold * 1000 +
    player1.badges.silver * 500 +
    player1.badges.bronze * 100
  playerResult['player2'] =
    player2.reputation +
    player2.badges.gold * 1000 +
    player2.badges.silver * 500 +
    player2.badges.bronze * 100

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
          cookie={params['site']}
          data={player1}
        />
        <PlayerResult
          type={'player2'}
          result={result}
          cookie={params['site']}
          data={player2}
        />
      </PlayersWrapper>
      <ChartWrapper result>
        <ReactHighcharts
          neverReflow={player1 && player2}
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
                data: player1
                  ? [
                      -player1.reputation,
                      -player1.badges.gold * 1000,
                      -player1.badges.silver * 500,
                      -player1.badges.bronze * 100,
                    ]
                  : [],
              },
              {
                name: 'Player 2',
                data: player2
                  ? [
                      player2.reputation,
                      player2.badges.gold * 1000,
                      player2.badges.silver * 500,
                      player2.badges.bronze * 100,
                    ]
                  : [],
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
              player1
                ? {
                    ...player1.reputationGraphData,
                    name: 'Player 1',
                    _colorIndex: null,
                  }
                : { name: 'Player 1', data: [] },
              player2
                ? {
                    ...player2.reputationGraphData,
                    name: 'Player 2',
                    _colorIndex: null,
                  }
                : { name: 'Player 2', data: [] },
            ],
          }}
        />
      </ChartWrapper>
      <ChartWrapper result>
        <ReactHighcharts
          neverReflow={player1 && player2}
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
                data: player1
                  ? [
                      player1.badges.gold,
                      player1.badges.silver,
                      player1.badges.bronze,
                    ]
                  : [],
              },
              {
                name: 'Player 2',
                data: player2
                  ? [
                      player2.badges.gold,
                      player2.badges.silver,
                      player2.badges.bronze,
                    ]
                  : [],
              },
            ],
          }}
        />
      </ChartWrapper>
    </ResultsWrapper>
  )
}

function ResultsLocation(props) {
  return (
    <Location>
      {locationProps => <Results {...locationProps} {...props} />}
    </Location>
  )
}

Results.propTypes = {
  location: PropTypes.object.isRequired,
}

ResultsLocation.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ResultsLocation
