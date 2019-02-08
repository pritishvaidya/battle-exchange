import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NotFoundComponent from '../components/not-found'

import { PageType } from './index'
import { PageTypes } from '../config'

const NotFoundPage = () => (
  <PageType.Provider value={{ pageType: PageTypes.Error }}>
    <Layout>
      <SEO title="404: Not found" />
      <NotFoundComponent />
    </Layout>
  </PageType.Provider>
)

export default NotFoundPage
