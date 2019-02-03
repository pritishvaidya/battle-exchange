import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import SearchBar from './search-bar'
import SearchResults from './search-results'

import { PlayerWrapper } from './style'

import { StackExchange } from '../../config'
import FetchList from '../../utils/fetch-list'
import SiteList from '../../utils/site-list'

function Player({ onSubmitPlayer, autoFocus, type, cookie }) {
  const [list, updateList] = useState([])
  const [loading, setLoading] = useState(false)
  const [focused, setFocus] = useState(autoFocus)
  const [searchString, setSearchString] = useState('Pri')
  const currentSite = SiteList.filter(
    ({ api_site_parameter }) => api_site_parameter === cookie
  )

  const fetchList = async name => {
    setLoading(true)
    const list = await FetchList(StackExchange.User, {
      order: 'desc',
      sort: 'reputation',
      inname: name,
      site: cookie,
      key: StackExchange.Key,
    })
    setSearchString(name)
    updateList(list)
    setLoading(false)
  }

  const delayedCallback = _.debounce(event => {
    fetchList(event.target.value)
  }, 1000)

  const onChange = event => {
    event.persist()
    delayedCallback(event)
  }

  const onSubmit = name => fetchList(name)
  const onFocus = () => setFocus(true)
  const onBlur = () => setFocus(false)

  return (
    <PlayerWrapper>
      <SearchBar
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmit={onSubmit}
        autoFocus={autoFocus}
        placeholder={`Enter the ${_.startCase(_.toLower(type))} name...`}
        open={loading && list.length && focused}
      />
      <SearchResults
        searchString={searchString}
        loading={loading}
        data={list}
        focused={focused}
        site={currentSite.length && currentSite[0]}
      />
    </PlayerWrapper>
  )
}

Player.propTypes = {
  onSubmitPlayer: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  cookie: PropTypes.string.isRequired,
}

export default Player
