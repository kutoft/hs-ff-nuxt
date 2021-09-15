import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateManagerApi = () => {
  const contentDir = `${rootDir}/content/managers`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/managers.json`
  const metaFile = `${apiDir}/managers-meta.json`
  const pages = siteConfig.managers.perPage
  const doneMessage = `{totalNumber} managers generated in managers API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/managers`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateManagerApi
