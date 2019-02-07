const PageTypes = {
  Home: 'home',
  Battle: 'battle',
  Sites: 'sites',
  Players: 'players',
  Results: 'results',
}

const Routes = {
  Battle: {
    default: '/battle',
    backslashDefault: '/battle/',
    site: '/battle/sites',
    players: '/battle/players',
    results: '/battle/results',
  },
}

const StackExchange = {
  Key: 'VLMSy2wUP9Vnp7RLa2NhUA((',
  Sites: 'https://api.stackexchange.com/2.2/sites',
  User: 'https://api.stackexchange.com/2.2/users',
}

const CookieList = {
  default: 'siteCookie',
}

const Graph = {
  chart: {
    renderTo: 'reputation-graph',
    defaultSeriesType: 'line',
    zoomType: 'xy',
    backgroundColor: '#FFFFFF',
    spacingBottom: 20,
    spacingTop: 20,
    spacingLeft: 10,
    spacingRight: 10,

    // Explicitly tell the width and height of a chart
    width:
      window.innerWidth <= 768
        ? window.innerWidth / 1.2
        : window.innerWidth / 3,
    height: window.innerHeight / 2.5,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: null,
  },
  xAxis: {
    type: 'datetime',
    maxZoom: 14 * 24 * 3600000, // fourteen days
    title: {
      text: null,
    },
    labels: {
      style: {
        'font-family': "'Avenir,sans-serif;",
      },
    },
  },
  yAxis: {
    title: {
      text: null,
    },
    labels: {
      style: {
        'font-family': "'Avenir,sans-serif;",
      },
    },
    startOnTick: false,
  },
  tooltip: {
    shared: true,
  },
  plotOptions: {
    line: {
      lineWidth: 2,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5,
          },
        },
      },
      shadow: false,
      states: {
        hover: {
          lineWidth: 3,
        },
      },
    },
    series: {
      animation: true,
    },
  },
  series: [],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 400,
        },
      },
    ],
  },
}

export { PageTypes, Routes, CookieList, StackExchange, Graph }
