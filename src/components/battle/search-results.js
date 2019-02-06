import React from 'react'
import PropTypes from 'prop-types'

import {
  SearchResultsWrapper,
  Result,
  ResultText,
  ProfileWrapper,
  ProfileImage,
  SiteLogo,
  ReputationWrapper,
} from './style'

import SearchLoader from './search-loader'

import formatReputation from '../../utils/format-reputation'
import Player1BattleIllustration from './player2_battle_illustration'
import Player2BattleIllustration from './player1_battle_illustration'

function SearchResults({
  submit,
  searchString,
  loading,
  data,
  focused,
  site: { icon_url },
  type,
}) {
  const regex = new RegExp(searchString, 'gi')
  if (focused) {
    if (loading) {
      return (
        <SearchResultsWrapper>
          <Result center>
            <SearchLoader />
          </Result>
        </SearchResultsWrapper>
      )
    } else if (data.length) {
      return (
        <SearchResultsWrapper>
          {data.map(player => {
            const { display_name, profile_image, reputation } = player
            const parts = display_name.split(regex)
            for (let i = 1; i < parts.length; i += 2) {
              parts[i] = (
                <ResultText key={i}>
                  <ResultText active>{searchString}</ResultText>
                  {parts[i]}
                </ResultText>
              )
            }
            return (
              <Result key={profile_image} onClick={() => submit(player)}>
                <ProfileWrapper>
                  <ProfileImage src={profile_image} />
                  {parts}
                </ProfileWrapper>
                <ReputationWrapper>
                  <SiteLogo src={icon_url} />
                  {formatReputation(reputation)}
                </ReputationWrapper>
              </Result>
            )
          })}
        </SearchResultsWrapper>
      )
    } else {
      return type === 'player1' ? (
        <Player1BattleIllustration />
      ) : (
        <Player2BattleIllustration />
      )
    }
  } else {
    return type === 'player1' ? (
      <Player1BattleIllustration />
    ) : (
      <Player2BattleIllustration />
    )
  }
}

SearchResults.defaultProps = {
  loading: false,
  focused: true,
}

SearchResults.propTypes = {
  submit: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  focused: PropTypes.bool,
  site: PropTypes.object,
  type: PropTypes.string,
}

export default SearchResults
