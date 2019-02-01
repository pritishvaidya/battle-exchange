import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
// import Nav from '../components/nav'
import Home from '../components/home'

const PageType = React.createContext({ pageType: null, route: '' })

function IndexPage() {
  return (
    <PageType.Provider value={{ pageType: 'Home' }}>
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
