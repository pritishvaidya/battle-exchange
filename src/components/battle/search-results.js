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

function SearchResults({
  searchString,
  loading,
  data,
  focused,
  site: { icon_url },
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
          {data.map(({ profile_image, display_name, reputation }) => {
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
              <Result key={profile_image}>
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
      return null
    }
  } else {
    return null
  }
}

SearchResults.defaultProps = {
  loading: false,
  focused: true,
}

SearchResults.propTypes = {
  searchString: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  focused: PropTypes.bool,
  site: PropTypes.object,
}

export default SearchResults
