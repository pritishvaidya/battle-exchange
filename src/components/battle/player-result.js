import React from 'react'
import PropTypes from 'prop-types'

import PlayerBadge from './player-badge'

import {
  PlayerResultWrapper,
  ProfileWrapper,
  ProfileImage,
  ProfileName,
  ReputationWrapper,
  SiteLogo,
} from './style'

import formatReputation from '../../utils/format-reputation'
import SiteList from '../../utils/site-list'

import IconSuccessError from './icon-success-error'

const PlayerResult = React.memo(function PlayerResult({
  cookie,
  data: {
    badge_counts: { bronze, silver, gold },
    profile_image,
    display_name,
    reputation,
    account_id,
  },
  type,
  result,
}) {
  const currentSite = SiteList.filter(
    ({ api_site_parameter }) => api_site_parameter === cookie
  )

  return (
    <PlayerResultWrapper
      info
      status={
        result === type ? 'success' : result === 'draw' ? 'draw' : 'error'
      }
    >
      <ProfileWrapper info>
        <ProfileImage src={profile_image} big />
        <ProfileName status>{display_name}</ProfileName>
      </ProfileWrapper>
      <ReputationWrapper info status>
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
      <IconSuccessError
        status={
          result === type ? 'success' : result === 'draw' ? 'draw' : 'error'
        }
      />
    </PlayerResultWrapper>
  )
})

PlayerResult.propTypes = {
  cookie: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  result: PropTypes.bool.isRequired,
}

export default PlayerResult
