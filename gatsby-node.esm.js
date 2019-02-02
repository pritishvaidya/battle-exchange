import { Routes } from './src/config'

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: Routes.Battle.default,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: Routes.Battle.site,
  })

  createRedirect({
    fromPath: Routes.Battle.backslashDefault,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: Routes.Battle.site,
  })
}
