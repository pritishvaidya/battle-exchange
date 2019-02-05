import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Results from '../../components/battle/results'
import { PageType } from '../index'

import { PageTypes } from '../../config'

function ResultsPage({ location: { state } = {} } = {}) {
  const { player } = state || ''
  return (
    <PageType.Provider value={{ pageType: PageTypes.Results }}>
      <Layout>
        <SEO
          title="Results"
          keywords={[`results`, `battle`, `exchange`, `battle-exchange`]}
        />
        <Results player={player} />
      </Layout>
    </PageType.Provider>
  )
}

export default ResultsPage
