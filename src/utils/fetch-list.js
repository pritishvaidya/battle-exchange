/*eslint-disable no-empty*/
import { stringify } from 'querystring'

async function fetchList(url, params) {
  try {
    const stringifiedParams = stringify(params)
    const response = await fetch(`${url}?${stringifiedParams}`)
    const { items } = await response.json()
    return items
  } catch (ex) {}
}

export default fetchList
