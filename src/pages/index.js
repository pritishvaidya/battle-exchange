import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/home'

import { PageTypes } from '../config'

const PageType = React.createContext({ pageType: null, route: '' })

function IndexPage() {
  return (
    <PageType.Provider value={{ pageType: PageTypes.Home }}>
      <Layout>
        <SEO
          title="Home"
          keywords={[`battle`, `exchange`, `battle-exchange`]}
        />
        <Home />
      </Layout>
    </PageType.Provider>
  )
}

export { PageType }
export default IndexPage
