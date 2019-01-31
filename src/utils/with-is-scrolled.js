import { useState, useEffect } from 'react'

const WithIsScrolledComponent = function WithIsScrolled({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  })

  function onScroll() {
    const scrolled = (window.pageYOffset || document.body.scrollTop) > 0
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled)
    }
  }
  return children(isScrolled)
}

export default WithIsScrolledComponent
