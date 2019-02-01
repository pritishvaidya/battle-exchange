import React from 'react'

import BattleIllustration from './battle-illustration'

import { HomeWrapper, BattleButton } from './style'

function HomePage() {
  return (
    <HomeWrapper>
      <BattleIllustration />
      <BattleButton>Start Battle</BattleButton>
    </HomeWrapper>
  )
}

export default HomePage
