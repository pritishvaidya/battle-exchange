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
  Sites: 'https://api.stackexchange.com/2.2/sites',
}

export { PageTypes, Routes, StackExchange }
