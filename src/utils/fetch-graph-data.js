/*eslint-disable no-empty*/
async function GraphData(id, name) {
  try {
    const response = await fetch(`/stackexchange/users/${id}?tab=reputation`)
    const string = await response.text()
    const regex = new RegExp(`\\{([^}]+)\\}`, 'gm')
    const items = string.match(regex)
    for (let i = 0; i < items.length; i++) {
      if (items[i].indexOf(name) !== -1) {
        const pointIntervalRegex = new RegExp(
          `pointInterval:[\\s](.*)(?=,)`,
          'g'
        )
        const pointStartRegex = new RegExp(`pointStart:[\\s](.*)(?=,)`, 'g')
        const dataRegex = new RegExp(`data:[\\s]\\[(.*)(?=])`, 'g')

        const pointIntervalStr = pointIntervalRegex.exec(items[i])
        const pointStartStr = pointStartRegex.exec(items[i])
        const dataStr = dataRegex.exec(items[i])
        return {
          pointInterval: eval(pointIntervalStr[1]),
          pointStart: eval(pointStartStr[1]),
          data: dataStr[1].split(',').map(Number),
          name,
        }
      }
    }
  } catch (ex) {}
}

export default GraphData
