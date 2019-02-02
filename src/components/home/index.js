import React from 'react'
import { navigate } from 'gatsby'

import BattleIllustration from './battle-illustration'

import { HomeWrapper, BattleButton } from './style'

import { Routes } from '../../config'

function HomePage() {
  return (
    <HomeWrapper>
      <BattleIllustration />
      <BattleButton onClick={() => navigate(Routes.Battle.default)}>
        Start Battle
      </BattleButton>
    </HomeWrapper>
  )
}

export default HomePage
