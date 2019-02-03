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

export { PageTypes, Routes, CookieList, StackExchange }
