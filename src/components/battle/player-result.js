import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'

import PlayerBadge from './player-badge'

import {
  PlayerWrapper,
  ProfileWrapper,
  ProfileImage,
  ProfileName,
  ReputationWrapper,
  SiteLogo,
  MultiplierWrapper,
  Title,
  Total,
} from './style'

import formatReputation from '../../utils/format-reputation'
import SiteList from '../../utils/site-list'
import PlayerMultiplierField from './player-multiplier-field'

const PlayerResult = React.memo(function PlayerResult({
  cookie,
  data: {
    badge_counts: { bronze, silver, gold },
    profile_image,
    display_name,
    reputation,
    account_id,
  },
  fetchResult,
}) {
  const totalScore = reputation + gold * 1000 + silver * 500 + bronze * 100
  const currentSite = SiteList.filter(
    ({ api_site_parameter }) => api_site_parameter === cookie
  )
  const [end, onSetEnd] = useState(false)

  const onEnd = () => {
    fetchResult(totalScore)
    onSetEnd(!end)
  }

  return (
    <PlayerWrapper info>
      <ProfileWrapper info>
        <ProfileImage src={profile_image} big />
        <ProfileName>{display_name}</ProfileName>
      </ProfileWrapper>
      <ReputationWrapper info>
        {!!currentSite.length && (
          <SiteLogo
            srcSet={`${currentSite[0].icon_url}, ${
              currentSite[0].high_resolution_icon_url
            } 2x`}
            src={currentSite[0].icon_url}
          />
        )}
        {formatReputation(reputation)}
      </ReputationWrapper>
      <PlayerBadge bronze={bronze} silver={silver} gold={gold} />
      <MultiplierWrapper>
        <Title>Main</Title>
        <PlayerMultiplierField
          name={'Reputation'}
          value={reputation}
          start
          formattingFn={number => number.toLocaleString()}
        />
        <Title>Badges</Title>
        <PlayerMultiplierField
          name={'Gold'}
          value={gold * 1000}
          prefix={`${gold} * 1000 = `}
          start
          formattingFn={number => number.toLocaleString()}
        />
        <PlayerMultiplierField
          name={'Silver'}
          value={silver * 500}
          prefix={`${silver} * 500 = `}
          start
          formattingFn={number => number.toLocaleString()}
        />
        <PlayerMultiplierField
          name={'Bronze'}
          value={bronze * 100}
          prefix={`${bronze} * 100 = `}
          start
          formattingFn={number => number.toLocaleString()}
        />
      </MultiplierWrapper>
      <Total>
        <CountUp
          end={totalScore}
          onEnd={onEnd}
          formattingFn={number => number.toLocaleString()}
        />
      </Total>
    </PlayerWrapper>
  )
})

PlayerResult.propTypes = {
  cookie: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  fetchResult: PropTypes.func.isRequired,
}

export default PlayerResult
