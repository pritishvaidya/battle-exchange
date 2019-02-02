import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Sites from '../../components/battle/sites'
import { PageType } from '../index'

import { PageTypes } from '../../config'

function ResultsPage() {
  return (
    <PageType.Provider value={{ pageType: PageTypes.Results }}>
      <Layout>
        <SEO
          title="Results"
          keywords={[`results`, `battle`, `exchange`, `battle-exchange`]}
        />
        <Sites />
      </Layout>
    </PageType.Provider>
  )
}

export default ResultsPage
