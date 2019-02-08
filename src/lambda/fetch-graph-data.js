import fetch from 'node-fetch'

exports.handler = async function(event, callback) {
  const { id, name } = JSON.parse(event.body)
  try {
    const response = await fetch(
      `https://stackexchange.com/users/${id}?tab=reputation`
    )
    const string = await response.text()

    const regex = new RegExp(`\\{([^}]+)\\}`, 'gm')
    const items = string.match(regex)

    const pointIntervalRegex = new RegExp(`pointInterval:[\\s](.*)(?=,)`, 'g')
    const pointStartRegex = new RegExp(`pointStart:[\\s](.*)(?=,)`, 'g')
    const dataRegex = new RegExp(`data:[\\s]\\[(.*)(?=])`, 'g')
    let pointIntervalStr
    let pointStartStr
    let dataStr

    for (const item of items) {
      if (item.indexOf(name) !== -1) {
        pointIntervalStr = pointIntervalRegex.exec(item)
        pointStartStr = pointStartRegex.exec(item)
        dataStr = dataRegex.exec(item)
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        pointInterval: eval(pointIntervalStr[1]) || null,
        pointStart: eval(pointStartStr[1]) || null,
        data: dataStr[1].split(',').map(Number) || null,
        name,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    }
  }
}
