import React from 'react'

// Style
import { Wrapper, Title, Description, Button } from './style'

function Home() {
  return (
    <Wrapper>
      <Title>Oh no!!!</Title>
      <Description>
        You’re either misspelling the URL or requesting a page that’s no longer
        here.
      </Description>
      <Button onClick={() => window.history.back()}>
        Back to previous page
      </Button>
    </Wrapper>
  )
}

export default Home
