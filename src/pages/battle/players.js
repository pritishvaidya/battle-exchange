import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Players from '../../components/battle/players'
import { PageType } from '../index'

import { PageTypes } from '../../config'

function PlayersPage() {
  return (
    <PageType.Provider value={{ pageType: PageTypes.Players }}>
      <Layout>
        <SEO
          title="Players"
          keywords={[`players`, `battle`, `exchange`, `battle-exchange`]}
        />
        <Players />
      </Layout>
    </PageType.Provider>
  )
}

export default PlayersPage
