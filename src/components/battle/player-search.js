import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import SearchBar from './search-bar'
import SearchResults from './search-results'

import { PlayerWrapper } from './style'

import { StackExchange } from '../../config'
import FetchList from '../../utils/fetch-list'
import SiteList from '../../utils/site-list'

function PlayerSearch({ onSubmitPlayer, autoFocus, type, cookie }) {
  const wrapperRef = useRef(null)
  const [list, updateList] = useState([])
  const [loading, setLoading] = useState(false)
  const [focused, setFocus] = useState(autoFocus)
  const [searchString, setSearchString] = useState('')
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
    if (list) {
      updateList(list)
    }
    setSearchString(name)
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

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false)
    }
  }, [])

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onBlur()
    }
  }

  const onBlur = () => setFocus(false)

  return (
    <PlayerWrapper ref={wrapperRef}>
      <SearchBar
        onChange={onChange}
        onFocus={onFocus}
        onSubmit={onSubmit}
        autoFocus={autoFocus}
        placeholder={`Enter ${_.startCase(_.toLower(type))} name...`}
        open={list.length && focused}
      />
      <SearchResults
        type={type}
        searchString={searchString}
        loading={loading}
        data={list}
        focused={focused}
        site={currentSite.length && currentSite[0]}
        submit={onSubmitPlayer}
      />
    </PlayerWrapper>
  )
}

PlayerSearch.propTypes = {
  onSubmitPlayer: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  cookie: PropTypes.string.isRequired,
}

export default PlayerSearch
