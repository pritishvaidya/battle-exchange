import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Sites from '../../components/battle/sites'
import { PageType } from '../index'

import { PageTypes } from '../../config'

function SitesPage() {
  return (
    <PageType.Provider value={{ pageType: PageTypes.Sites }}>
      <Layout>
        <SEO
          title="Sites"
          keywords={[`sites`, `battle`, `exchange`, `battle-exchange`]}
        />
        <Sites />
      </Layout>
    </PageType.Provider>
  )
}

export default SitesPage
