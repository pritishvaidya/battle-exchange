import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
// import Nav from '../components/nav'
import Home from '../components/home'

const PageType = React.createContext({ pageType: 'Home', route: '' })

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`battle`, `exchange`, `battle-exchange`]} />
      <Home />
    </Layout>
  )
}

export { PageType }
export default IndexPage
