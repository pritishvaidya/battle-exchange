import React, { useState, useEffect } from 'react'
import ReactHighcharts from 'react-highcharts'
import PropTypes from 'prop-types'

import {
  PlayerWrapper,
  ProfileWrapper,
  ProfileImage,
  ProfileName,
  ReputationWrapper,
  SiteLogo,
  ChartWrapper,
  EmptyGraph,
  CloseWrapper,
} from './style'
import formatReputation from '../../utils/format-reputation'
import SiteList from '../../utils/site-list'
import FetchGraphData from '../../utils/fetch-graph-data'

import { Graph } from '../../config'

import PlayerBadge from './player-badge'

const PlayerInfo = React.memo(function PlayerInfo({
  clear,
  cookie,
  data: {
    badge_counts: { bronze, silver, gold },
    profile_image,
    display_name,
    reputation,
    account_id,
  },
  onSubmitGraph,
}) {
  const currentSite = SiteList.filter(
    ({ api_site_parameter }) => api_site_parameter === cookie
  )
  const [loading, setLoading] = useState(false)
  const [graphData, setGraphData] = useState({
    name: currentSite[0].name,
    data: [],
  })

  async function fetchGraphData(id, name) {
    setLoading(true)
    const graphData = await FetchGraphData(id, name)
    if (graphData) {
      setGraphData(graphData)
      onSubmitGraph(graphData)
    }
    setLoading(false)
  }

  useEffect(
    () => {
      const name = currentSite.length && currentSite[0].name
      fetchGraphData(account_id, name)
    },
    [account_id]
  )

  return (
    <PlayerWrapper info>
      <ProfileWrapper info>
        <ProfileImage src={profile_image} big />
        <ProfileName>{display_name}</ProfileName>
      </ProfileWrapper>
      <ReputationWrapper info>
        {currentSite.length && (
          <SiteLogo
            srcSet={`${currentSite[0].icon_url}, ${
              currentSite[0].high_resolution_icon_url
            } 2x`}
            src={currentSite[0].icon_url}
          />
        )}
        {formatReputation(reputation)}
      </ReputationWrapper>
      <PlayerBadge silver={silver} gold={gold} bronze={bronze} />
      <ChartWrapper>
        <ReactHighcharts
          config={{
            ...Graph,
            chart: { ...Graph.chart, flex: 1 },
            series: [graphData],
          }}
        />
        {!loading &&
          Array.isArray(graphData.data) &&
          graphData.data.length === 0 && (
            <EmptyGraph>No Data to Display</EmptyGraph>
          )}
      </ChartWrapper>
      <CloseWrapper onClick={clear}>Clear</CloseWrapper>
    </PlayerWrapper>
  )
})

PlayerInfo.propTypes = {
  clear: PropTypes.func.isRequired,
  cookie: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onSubmitGraph: PropTypes.func.isRequired,
}

export default PlayerInfo
