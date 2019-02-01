function openLink(url, params = '_blank') {
  const win = window.open(url, params)
  win.focus()
}

export default openLink
